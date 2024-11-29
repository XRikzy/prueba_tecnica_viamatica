import { SessionsRepository } from "../../../domain/repositories/session.repository";

export class DeleteSessionsUseCase {
  private SessionsRepository: SessionsRepository;

  constructor(SessionsRepository: SessionsRepository) {
    this.SessionsRepository = SessionsRepository;
  }

  async execute(id: number): Promise<void> {
    const Sessions = await this.SessionsRepository.findById(id);

    if (!Sessions) {
      throw new Error('Sessions not found');
    }

    await this.SessionsRepository.delete(id);
  }
}