import { Sessions } from "../../../config/model/sessions.model";
import { SessionsRepository } from "../../../domain/repositories/session.repository";


export class GetSessionsUseCase {
  private SessionsRepository: SessionsRepository;

  constructor(SessionsRepository: SessionsRepository) {
    this.SessionsRepository = SessionsRepository;
  }

  async execute(id: number): Promise<Sessions | null> {
    return this.SessionsRepository.findById(id);
  }
  async getAll(): Promise<Sessions[]> {
    return this.SessionsRepository.findAll();
  }
}
