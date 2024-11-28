import { User } from "../../config/model/user.model";

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

  async update(id: number, user: Partial<User>): Promise<[number, User[]]> {
    return User.update(user, { where: { id }, returning: true });
  }

  async delete(id: number) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}