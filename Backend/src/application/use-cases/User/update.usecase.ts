import { User } from "../../../config/model/user.model";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { UpdateUserDTO } from "../../dto/user.dto";

export class UpdateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number, data: UpdateUserDTO): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }
    await this.userRepository.update(id, data);
    const updatedUser = await this.userRepository.findById(id);
    if (!updatedUser) {
      throw new Error("Error retrieving updated user");
    }

    return updatedUser;
  }
}
