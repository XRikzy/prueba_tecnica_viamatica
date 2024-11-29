import { RolUser } from "../../../config/model/roluser.model";
import { RolUserRepository } from "../../../domain/repositories/roluser.repository";
import { CreateRolUserDTO } from "../../dto/roluser.dto";


export class CreateRolUserUseCase {
  private RolUserRepository: RolUserRepository;

  constructor(userRepository: RolUserRepository) {
    this.RolUserRepository = userRepository;
  }

  async execute(data: CreateRolUserDTO): Promise<RolUser> {
    const newUser = await this.RolUserRepository.create(data);
    return newUser;
  }
}