import { InvalidPasswordAdding, UserAlreadySession, UserBlocked, UserNoActiveSession, UserNotFound, UserWithOutRols } from '../../utils/apperros.utils';
import { generateToken } from '../../utils/jwt';
import { RolUserRepository } from '../repositories/roluser.repository';
import { SessionsRepository } from '../repositories/session.repository';
import { UserRepository } from '../repositories/user.repository';

import bcrypt from 'bcryptjs';

export class AuthService {
  private userRepository = new UserRepository();
  private sessionsRepository = new SessionsRepository();
  private rolUserRepository = new RolUserRepository();
  async login(identifier: string, password: string): Promise<{ token: string; sessionId: number, rol: string, username: string }> {
    const user = await this.userRepository.findByIdentifier(identifier);
    if (!user) {
      throw new UserNotFound("El usuario no se encuentra o no existe");
    }
    if (user.status === 'blocked') {
      throw new UserBlocked("El usuario esta bloqueado");
    }
    // if (password === user.password) {
    //   await this.userRepository.incrementFailedAttempts(user.idUser);
    //   if (user.failedAttempts + 1 >= 3) {
    //     await this.userRepository.blockUser(user.idUser);
    //     throw new UserBlocked('Usuario Bloqueado por sobrepasar el numero de intentos');
    //   }
    //   throw new InvalidPasswordAdding('La contraseña es incorrecta');
    // }
    const activeSession = await this.sessionsRepository.getCloseSessionByUser(user.idUser);
    if (activeSession) {
      throw new UserAlreadySession('El usuario ya tiene una sesión activa.');
    }
    const roles = await this.rolUserRepository.getRolesByUserId(user.idUser);
    if (roles.length === 0) {
      throw new UserWithOutRols("El usuario no cuenta con roles designados");
    }
    //Comprobar ROL
    const rol = roles[0].rolName;
    const token = generateToken({ id: user.idUser, roles: roles.map((rol) => rol.rolName) });
    await this.userRepository.setSessionActive(user.idUser, 'Y');
    const session = await this.sessionsRepository.createSession(user.idUser);

    return { token, sessionId: session.id, rol, username: user.username };
  }
  async logout(userId: number ): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user || user.sessionActive === 'N') {
      throw new UserNoActiveSession("El usuario no tiene sesiones activas");
    }
    await this.sessionsRepository.closeSession(userId);
    await this.userRepository.setSessionActive(userId, 'N');
  }
}
