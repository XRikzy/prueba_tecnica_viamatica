import { RolRolOption } from "../../../config/model/rolroloption.model";
import { RolRolOptionRepository } from "../../../domain/repositories/rolroloption.respository";
import { UpdateRolRolOptionDTO } from "../../dto/rolroloption.dto";

export class UpdateRolRolOptionUseCase {
  private RolRolOptionRepository: RolRolOptionRepository;

  constructor(RolRolOptionRepository: RolRolOptionRepository) {
    this.RolRolOptionRepository = RolRolOptionRepository;
  }

  async execute(
    id: number,
    data: UpdateRolRolOptionDTO
  ): Promise<RolRolOption> {
    const RolRolOption = await this.RolRolOptionRepository.findById(id);

    if (!RolRolOption) {
      throw new Error("Rol Option not found");
    }
    await this.RolRolOptionRepository.update(id, data);
    const updatedRolRolOption = await this.RolRolOptionRepository.findById(id);
    if (!updatedRolRolOption) {
      throw new Error("Error retrieving updated Rol Option");
    }

    return updatedRolRolOption;
  }
}
