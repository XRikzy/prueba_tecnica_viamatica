import { RolUser } from "../../config/model/Roluser";



export class RolUserRepository {
  async create(RolUserData: Partial<RolUser>) {
    return await RolUser.create(RolUserData);
  }
  async createMany(RolUserData: Partial<RolUser>[]) {
    return await RolUser.bulkCreate(RolUserData);
  }
  async getAll() {
    return await RolUser.findAll();
  }
  async getByIdUser(idUser: number) {
    return await RolUser.findOne({ where: { idUser } });
  }
  async getByIdRol(idRol: number) {
    return await RolUser.findByPk(idRol);
  }

  async update(id: number, RolUserData: any) {
    const user = await RolUser.findByPk(id);
    if (user) {
      return await user.update(RolUserData);
    }
    return null;
  }
  async delete(id: number) {
    const user = await RolUser.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}