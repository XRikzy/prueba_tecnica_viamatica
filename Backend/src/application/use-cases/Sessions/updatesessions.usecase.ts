import { Sessions } from "../../../config/model/sessions.model";
import { SessionsRepository } from "../../../domain/repositories/session.repository";
import { UpdateSessionDTO } from "../../dto/session.dto";


export class UpdateSessionsUseCase {
  private SessionsRepository: SessionsRepository;

  constructor(SessionsRepository: SessionsRepository) {
    this.SessionsRepository = SessionsRepository;
  }

  async execute(id: number, data: UpdateSessionDTO): Promise<Sessions> {
    const Sessions = await this.SessionsRepository.findById(id);

    if (!Sessions) {
      throw new Error("Sessions not found");
    }
    await this.SessionsRepository.update(id, data);
    const updatedSessions = await this.SessionsRepository.findById(id);
    if (!updatedSessions) {
      throw new Error("Error retrieving updated Sessions");
    }

    return updatedSessions;
  }
}