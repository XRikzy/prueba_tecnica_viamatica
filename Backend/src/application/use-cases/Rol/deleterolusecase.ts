import { RolRepository } from "../../../domain/repositories/rol.repository";

export class DeleteRolUseCase {
  private RolRepository: RolRepository;

  constructor(RolRepository: RolRepository) {
    this.RolRepository = RolRepository;
  }

  async execute(id: number): Promise<void> {
    const Rol = await this.RolRepository.findById(id);

    if (!Rol) {
      throw new Error('Rol not found');
    }

    await this.RolRepository.delete(id);
  }
}