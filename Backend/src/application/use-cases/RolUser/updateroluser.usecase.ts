import { RolUser } from "../../../config/model/roluser.model";
import { RolUserRepository } from "../../../domain/repositories/roluser.repository";
import { UpdateRolUserDTO } from "../../dto/roluser.dto";


export class UpdateRolUserUseCase {
  private RolUserRepository: RolUserRepository;

  constructor(RolUserRepository: RolUserRepository) {
    this.RolUserRepository = RolUserRepository;
  }

  async execute(id: number, data: UpdateRolUserDTO): Promise<RolUser> {
    const RolUser = await this.RolUserRepository.findById(id);

    if (!RolUser) {
      throw new Error("Rol User not found");
    }
    await this.RolUserRepository.update(id, data);
    const updatedRolUser = await this.RolUserRepository.findById(id);
    if (!updatedRolUser) {
      throw new Error("Error retrieving updated RolUser");
    }

    return updatedRolUser;
  }
}
