import { RolRolOptionRepository } from "../../../domain/repositories/rolroloption.respository";


export class DeleteRolRolOptionUseCase {
  private RolRolOptionRepository: RolRolOptionRepository;
  constructor(RolRolOptionRepository: RolRolOptionRepository) {
    this.RolRolOptionRepository = RolRolOptionRepository;
  }
  async execute(id: number) {
    const Rol = await this.RolRolOptionRepository.findById(id);

    if (!Rol) {
      throw new Error("Rol Option not found");
    }
    this.RolRolOptionRepository.delete(id);
  }
}
