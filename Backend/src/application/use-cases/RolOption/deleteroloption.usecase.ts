import { RolOptionRepository } from "../../../domain/repositories/roloption.repository";

export class DeleteRolOptionUseCase {
  private RolOptionRepository: RolOptionRepository;
  constructor(RolOptionRepository: RolOptionRepository) {
    this.RolOptionRepository = RolOptionRepository;
  }
  async execute(id: number) {
    const Rol = await this.RolOptionRepository.findById(id);

    if (!Rol) {
      throw new Error("Rol User not found");
    }
    this.RolOptionRepository.delete(id);
  }
}
