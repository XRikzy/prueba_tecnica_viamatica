import { RolOption } from "../../config/model/RolOption";


export class RolOptionRepository {
  async create(RolOptionData: Partial<RolOption>) {
    return await RolOption.create(RolOptionData);
  }
  async createMany(RolOptionData: Partial<RolOption>[]) {
    return await RolOption.bulkCreate(RolOptionData);
  }
  async getAll() {
    return await RolOption.findAll();
  }
  async getByRolOptionName(nameOption: string) {
    return await RolOption.findOne({ where: { nameOption } });
  }
  async getById(id: number) {
    return await RolOption.findByPk(id);
  }

  async update(id: number, RolOptionData: any) {
    const user = await RolOption.findByPk(id);
    if (user) {
      return await user.update(RolOptionData);
    }
    return null;
  }
  async delete(id: number) {
    const user = await RolOption.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}