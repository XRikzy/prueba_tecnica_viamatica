import { Rol } from "../../../config/model/rol.model";
import { RolRepository } from "../../../domain/repositories/rol.repository";
import { CreateRolDTO } from "../../dto/rol.dto";



export class CreateRolUseCase {
  private RolRepository: RolRepository;

  constructor(userRepository: RolRepository) {
    this.RolRepository = userRepository;
  }

  async execute(data: CreateRolDTO): Promise<Rol> {
    const newUser = await this.RolRepository.create(data);
    return newUser;
  }
}