import { RolRolOption } from "../../../config/model/rolroloption.model";
import { RolRolOptionRepository } from "../../../domain/repositories/rolroloption.respository";

export class GetRolRolOptionUseCase {
  private RolRolOptionRepository: RolRolOptionRepository;

  constructor(RolRolOptionRepository: RolRolOptionRepository) {
    this.RolRolOptionRepository = RolRolOptionRepository;
  }

  async execute(id: number): Promise<RolRolOption | null> {
    return this.RolRolOptionRepository.findById(id);
  }

  async getAll(): Promise<RolRolOption[]> {
    return this.RolRolOptionRepository.findAll();
  }
  async getByIdOption(idOption: number): Promise<RolRolOption | null> {
    return this.RolRolOptionRepository.getByIdRolOption(idOption);
  }
}
