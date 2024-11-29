import { Sessions } from "../../../config/model/sessions.model";
import { SessionsRepository } from "../../../domain/repositories/session.repository";
import { CreateSessionDTO } from "../../dto/session.dto";


export class CreateSessionsUseCase {
  private SessionsRepository: SessionsRepository;

  constructor(userRepository: SessionsRepository) {
    this.SessionsRepository = userRepository;
  }

  async execute(data: CreateSessionDTO): Promise<Sessions> {
    const newUser = await this.SessionsRepository.create(data);
    return newUser;
  }
}