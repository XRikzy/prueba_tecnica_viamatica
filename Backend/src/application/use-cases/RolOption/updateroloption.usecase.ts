import { RolOption } from "../../../config/model/roloptions.model";
import { RolOptionRepository } from "../../../domain/repositories/roloption.repository";
import { UpdateRolOptionDTO } from "../../dto/roloption.dto";



export class UpdateRolOptionUseCase {
  private RolOptionRepository: RolOptionRepository;

  constructor(RolOptionRepository: RolOptionRepository) {
    this.RolOptionRepository = RolOptionRepository;
  }

  async execute(id: number, data: UpdateRolOptionDTO): Promise<RolOption> {
    const RolOption = await this.RolOptionRepository.findById(id);

    if (!RolOption) {
      throw new Error("Rol Option not found");
    }
    await this.RolOptionRepository.update(id, data);
    const updatedRolOption = await this.RolOptionRepository.findById(id);
    if (!updatedRolOption) {
      throw new Error("Error retrieving updated Rol Option");
    }

    return updatedRolOption;
  }
}