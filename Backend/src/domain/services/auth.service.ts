import { generateToken } from '../../utils/jwt';
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
      throw new Error('User not found');
    }
    if (user.status === 'blocked') {
      throw new Error('User is blocked.');
    }
    if (user.sessionActive === 'Y') {
      throw new Error('User already has an active session.');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const roles = await this.rolUserRepository.getRolesByUserId(user.idUser);
    if (roles.length === 0) {
      throw new Error('User has no roles assigned');
    }
    const token = generateToken({ id: user.idUser, roles: roles.map((rol) => rol.rolName) });
    await this.userRepository.setSessionActive(user.idUser, 'Y');
    const session = await this.sessionsRepository.createSession(user.idUser);

    return { token, sessionId: session.id };
  }
  async logout(userId: number): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user || user.sessionActive === 'N') {
      throw new Error('No active session found for this user.');
    }
    await this.sessionsRepository.closeSession(userId);
    await this.userRepository.setSessionActive(userId, 'N');
  }
}
