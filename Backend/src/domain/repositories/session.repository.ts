import { Sessions } from "../../config/model/sessions.model";


export class SessionsRepository {
  async create(SessionsData: Partial<Sessions>) {
    return await Sessions.create(SessionsData);
  }
  async createMany(SessionssData: Partial<Sessions>[]) {
    return await Sessions.bulkCreate(SessionssData);
  }
  async findAll() {
    return await Sessions.findAll();
  }
  async getSessionsByIdUser(user_idUser: number) {
    return await Sessions.findOne({ where: { user_idUser } });
  }
  async findById(id: number) {
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
  async createSession(userId: number): Promise<Sessions> {
    return Sessions.create({ user_idUser: userId, EntryDate: new Date() });
  }

  async closeSession(userId: number): Promise<void> {
    const session = await Sessions.findOne({
      where: { user_idUser: userId, CloseDate: null },
      order: [['EntryDate', 'DESC']],
    });

    if (session) {
      await session.update({ CloseDate: new Date() });
    }
  }
}
