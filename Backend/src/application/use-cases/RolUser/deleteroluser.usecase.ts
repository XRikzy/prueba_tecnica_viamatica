
import { RolUserRepository } from "../../../domain/repositories/roluser.repository";

export class DeleteRolUserUseCase {
  private RolRepository: RolUserRepository;

  constructor(RolRepository: RolUserRepository) {
    this.RolRepository = RolRepository;
  }

  async execute(id: number): Promise<void> {
    const Rol = await this.RolRepository.findById(id);

    if (!Rol) {
      throw new Error('Rol User not found');
    }

    await this.RolRepository.delete(id);
  }
}