import { Sessions } from "../../config/model/Sessions";


export class SessionsRepository {
  async create(SessionsData: Partial<Sessions>) {
    return await Sessions.create(SessionsData);
  }
  async createMany(SessionssData: Partial<Sessions>[]) {
    return await Sessions.bulkCreate(SessionssData);
  }
  async getAll() {
    return await Sessions.findAll();
  }
  async getBySessionsIdUser(idUser: number) {
    return await Sessions.findOne({ where: { idUser } });
  }
  async getById(id: number) {
    return await Sessions.findByPk(id);
  }

  async update(id: number, SessionsData: any) {
    const user = await Sessions.findByPk(id);
    if (user) {
      return await user.update(SessionsData);
    }
    return null;
  }
  async delete(id: number) {
    const user = await Sessions.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}
