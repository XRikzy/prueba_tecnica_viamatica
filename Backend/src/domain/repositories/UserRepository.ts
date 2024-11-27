import { Users } from "../../config/model/Users";

export class UsersRepository {
  async create(UsersData: {
    UserName: string;
    Password: string;
    Mail: string;
    SessionActive: string;
    Person_idPerson2?: number;
    Status?: string;
  }) {
    return await Users.create(UsersData);
  }
  async getAll() {
    return await Users.findAll();
  }
  async getByUsersName(UserName: string) {
    return await Users.findOne({ where: { UsersName: UserName } });
  }
  async getById(id: number) {
    return await Users.findByPk(id);
  }

  async update(id: number, UsersData: any) {
    const user = await Users.findByPk(id);
    if (user) {
      return await user.update(UsersData);
    }
    return null;
  }
  async delete(id: number) {
    const user = await Users.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}
