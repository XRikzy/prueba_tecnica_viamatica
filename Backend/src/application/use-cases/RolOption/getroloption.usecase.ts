import { RolOption } from "../../../config/model/roloptions.model";
import { RolOptionRepository } from "../../../domain/repositories/roloption.repository";

export class GetRolOptionUseCase {
  private RolOptionRepository: RolOptionRepository;

  constructor(RolOptionRepository: RolOptionRepository) {
    this.RolOptionRepository = RolOptionRepository;
  }

  async execute(id: number): Promise<RolOption | null> {
    return this.RolOptionRepository.findById(id);
  }

  async getAll(): Promise<RolOption[]> {
    return this.RolOptionRepository.findAll();
  }
  async getRolOptionByName(name: string): Promise<RolOption | null> {
    return this.RolOptionRepository.getByRolOptionName(name);
  }
}
