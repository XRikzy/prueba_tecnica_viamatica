import { generateToken } from '../../utils/jwt';
import { PasswordValid, UserAlreadySession, UserBlocked, UserNoActiveSession, UserNotFound, UserWithOutRols } from '../../utils/validationerros.utils';
import { RolUserRepository } from '../repositories/roluser.repository';
import { SessionsRepository } from '../repositories/session.repository';
import { UserRepository } from '../repositories/user.repository';

import bcrypt from 'bcryptjs';

export class AuthService {
  private userRepository = new UserRepository();
  private sessionsRepository = new SessionsRepository();
  private rolUserRepository = new RolUserRepository();
  async login(identifier: string, password: string): Promise<{ token: string; sessionId: number }> {
    const user = await this.userRepository.findByIdentifier(identifier);
    if (!user) {
      throw new UserNotFound();
    }
    if (user.status === 'blocked') {
      throw new UserBlocked();
    }
    if (user.sessionActive === 'Y') {
      throw new UserAlreadySession();
    }
    const roles = await this.rolUserRepository.getRolesByUserId(user.idUser);
    if (roles.length === 0) {
      throw new UserWithOutRols();
    }
    const token = generateToken({ id: user.idUser, roles: roles.map((rol) => rol.rolName) });
    await this.userRepository.setSessionActive(user.idUser, 'Y');
    const session = await this.sessionsRepository.createSession(user.idUser);

    return { token, sessionId: session.id };
  }
  async logout(userId: number): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user || user.sessionActive === 'N') {
      throw new UserNoActiveSession();
    }
    await this.sessionsRepository.closeSession(userId);
    await this.userRepository.setSessionActive(userId, 'N');
  }
}
