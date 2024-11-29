import { CreateSessionDTO, UpdateSessionDTO } from "../../application/dto/session.dto";
import { CreateSessionsUseCase, DeleteSessionsUseCase, GetSessionsByUserUseCase, GetSessionsUseCase, UpdateSessionsUseCase } from "../../application/use-cases/Sessions";
import { SessionsRepository } from "../repositories/session.repository";

export class SessionsService {
  private SessionsRepository = new SessionsRepository();

  private createSessionsUseCase = new CreateSessionsUseCase(this.SessionsRepository);
  private getSessionsUseCase = new GetSessionsUseCase(this.SessionsRepository);
  private updateSessionsUseCase = new UpdateSessionsUseCase(this.SessionsRepository);
  private deleteSessionsUseCase = new DeleteSessionsUseCase(this.SessionsRepository);
  private getSessionsByUserUseCase = new GetSessionsByUserUseCase(this.SessionsRepository)

  async createSessions(data: CreateSessionDTO) {
    return this.createSessionsUseCase.execute(data);
  }

  async getSessions(id: number) {
    return this.getSessionsUseCase.execute(id);
  }
  async getAllSessions() {
    return this.getSessionsUseCase.getAll();
  }
  async getSessionByUser(idUser: number){
    return this.getSessionsByUserUseCase.execute(idUser)
  }
  async updateSessions(id: number, data: UpdateSessionDTO) {
    return this.updateSessionsUseCase.execute(id, data);
  }

  async deleteSessions(id: number) {
    return this.deleteSessionsUseCase.execute(id);
  }
}