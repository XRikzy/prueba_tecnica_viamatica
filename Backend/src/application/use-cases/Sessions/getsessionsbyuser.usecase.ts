import { Sessions } from "../../../config/model/sessions.model";
import { SessionsRepository } from "../../../domain/repositories/session.repository";


export class GetSessionsByUserUseCase {
  private SessionsRepository: SessionsRepository;

  constructor(SessionsRepository: SessionsRepository) {
    this.SessionsRepository = SessionsRepository;
  }

  async execute(idUser: number): Promise<Sessions | null> {
    return this.SessionsRepository.getSessionsByIdUser(idUser);
  }
}