import { RolRolOption } from "../../config/model/rolroloption.model";


export class RolRolOptionRepository {
  async create(RolRolOptionData: Partial<RolRolOption>) {
    return await RolRolOption.create(RolRolOptionData);
  }
  async findAll() {
    return await RolRolOption.findAll();
  }
  async getByIdRolOption(idOptionRol: number) {
    return await RolRolOption.findOne({ where: { idOptionRol: idOptionRol } });
  }
  async findById(id: number) {
    return await RolRolOption.findByPk(id);
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