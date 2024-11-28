import { Rol } from "../../../config/model/rol.model";
import { RolRepository } from "../../../domain/repositories/rol.repository";


export class GetRolUseCase {
  private RolRepository: RolRepository;

  constructor(RolRepository: RolRepository) {
    this.RolRepository = RolRepository;
  }

  async execute(id: number): Promise<Rol | null> {
    return this.RolRepository.findById(id);
  }

  async getAll(): Promise<Rol[]> {
    return this.RolRepository.findAll();
  }
}
