import { Rol } from "../../config/model/rol.model";
import { RolUser } from "../../config/model/roluser.model";



export class RolUserRepository {
  async create(RolUserData: Partial<RolUser>) {
    return await RolUser.create(RolUserData);
  }
  async findAll() {
    return await RolUser.findAll();
  }
  async getByIdUser(idUser: number) {
    return await RolUser.findOne({ where: { idUser } });
  }
  async findById(id: number) {
    return await RolUser.findByPk(id);
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
  async getRolesByUserId(userId: number): Promise<Rol[]> {
    return Rol.findAll({
      include: [
        {
          model: RolUser,
          where: { user_idUser: userId },
        },
      ],
    });
  }
}