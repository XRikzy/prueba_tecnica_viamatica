import { User } from "../../../config/model/user.model";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { CreateUserDTO } from "../../dto/user.dto";

export class CreateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(data: CreateUserDTO): Promise<User> {
    const newUser = await this.userRepository.create(data);
    return newUser;
  }
}
