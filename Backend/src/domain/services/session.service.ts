import { Sessions } from "../../config/model/sessions.model";
import { SessionsRepository } from "../repositories/session.repository";

export class SessionsServices {
  private SessionsRepository: SessionsRepository;

  constructor(SessionsRepository: SessionsRepository) {
    this.SessionsRepository = SessionsRepository;
  }
  async createSessions(SessionsData: Partial<Sessions>) {
    return await this.SessionsRepository.create(SessionsData);
  }
  async createManySessions(SessionsData: Partial<Sessions>[]) {
    return await this.SessionsRepository.createMany(SessionsData);
  }
  async getAllSessions() {
    return await this.SessionsRepository.getAll();
  }
  async getSessionsBySessionsName(IdUser: number) {
    return await this.SessionsRepository.getBySessionsIdUser(IdUser);
  }
  async getSessionsById(id: number) {
    return await this.SessionsRepository.getById(id);
  }
  async updateSessions(id: number, userData: any) {
    return await this.SessionsRepository.update(id, userData);
  }
  async deleteSessions(id: number) {
    return await this.SessionsRepository.delete(id);
  }
}
