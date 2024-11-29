import { UserRepository } from "../../../domain/repositories/user.repository";


export class UnlockUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(idUser: number): Promise<void> {
    await this.userRepository.unlockUser(idUser);
  }
}