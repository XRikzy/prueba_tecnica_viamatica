import { UserRepository } from "../../../domain/repositories/user.repository";


export class DeleteUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.delete(id);
  }
}
