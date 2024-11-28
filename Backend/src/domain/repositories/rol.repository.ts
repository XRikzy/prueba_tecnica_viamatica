
import { Rol } from "../../config/model/rol.model";


export class RolRepository {
  async create(RolData: Partial<Rol>) {
    return await Rol.create(RolData);
  }
  async findAll() {
    return await Rol.findAll();
  }
  async findById(id: number) {
    return await Rol.findByPk(id);
  }

  async update(id: number, RolData: any) {
    const user = await Rol.findByPk(id);
    if (user) {
      return await user.update(RolData);
    }
    return null;
  }
  async delete(id: number) {
    const user = await Rol.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}