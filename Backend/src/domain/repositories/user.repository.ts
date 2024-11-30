import { Op } from "sequelize";
import { User } from "../../config/model/user.model";
import { sequelize } from "../../infrastructure/database/databaseconfig";

export class UserRepository {
  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async create(user: Partial<User>): Promise<User> {
    return User.create(user);
  }
  async findByUsername(username: string) {
    return await User.findOne({ where: { username } });
  }
  async update(id: number, user: Partial<User>): Promise<[number, User[]]> {
    return User.update(user, { where: { id }, returning: true });
  }
  async getUserStatusCounts() {
    const [results] = await sequelize.query('SELECT * FROM count_user_status_and_failed_attempts()');
    return results;
  }
  async delete(id: number) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
  async findByIdentifier(identifier: string): Promise<User | null> {
    return User.findOne({
      where: {
        [Op.or]: [{ username: identifier }, { mail: identifier }],
      },
    });
  }
  async setSessionActive(userId: number, status: 'Y' | 'N'): Promise<void> {
    await User.update({ SessionActive: status }, { where: { idUser: userId } });
  }

  async incrementFailedAttempts(userId: number): Promise<void> {
    const user = await this.findById(userId);
    if (user) {
      await user.increment('failedAttempts');
    }
  } 
   async unlockUser(userId: number): Promise<void> {
    await User.update({ failedAttempts: 0, status: 'active' }, { where: { idUser: userId } });
  }

  async blockUser(userId: number): Promise<void> {
    await User.update({ status: 'blocked' }, { where: { idUser: userId } });
  }
}