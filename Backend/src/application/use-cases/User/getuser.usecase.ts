import { User } from "../../../config/model/user.model";
import { UserRepository } from "../../../domain/repositories/user.repository";

export class GetUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
  async getUserName(username: string): Promise<User | null> {
    return this.userRepository.findByUsername(username);
  }
}
