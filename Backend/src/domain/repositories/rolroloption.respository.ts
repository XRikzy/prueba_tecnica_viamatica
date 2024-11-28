import { RolRolOption } from "../../config/model/rolroloption.model";


export class RolRolOptionRepository {
  async create(RolRolOptionData: Partial<RolRolOption>) {
    return await RolRolOption.create(RolRolOptionData);
  }
  async createMany(RolRolOptionData: Partial<RolRolOption>[]) {
    return await RolRolOption.bulkCreate(RolRolOptionData);
  }
  async getAll() {
    return await RolRolOption.findAll();
  }
  async getByIdRolOption(idOptionRol: number) {
    return await RolRolOption.findOne({ where: { idOptionRol: idOptionRol } });
  }
  async getByIdRol(idRol: number) {
    return await RolRolOption.findByPk(idRol);
  }

  async update(id: number, RolRolOptionData: any) {
    const rolroloption = await RolRolOption.findByPk(id);
    if (rolroloption) {
      return await rolroloption.update(RolRolOptionData);
    }
    return null;
  }
  async delete(id: number) {
    const rolroloption = await RolRolOption.findByPk(id);
    if (rolroloption) {
      return await rolroloption.destroy();
    }
    return null;
  }
}