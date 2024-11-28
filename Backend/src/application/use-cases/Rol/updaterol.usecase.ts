import { Rol } from "../../../config/model/rol.model";
import { RolRepository } from "../../../domain/repositories/rol.repository";
import { UpdateRolDTO } from "../../dto/rol.dto";


export class UpdateRolUseCase {
  private RolRepository: RolRepository;

  constructor(RolRepository: RolRepository) {
    this.RolRepository = RolRepository;
  }

  async execute(id: number, data: UpdateRolDTO): Promise<Rol> {
    const Rol = await this.RolRepository.findById(id);

    if (!Rol) {
      throw new Error("Rol not found");
    }
    await this.RolRepository.update(id, data);
    const updatedRol = await this.RolRepository.findById(id);
    if (!updatedRol) {
      throw new Error("Error retrieving updated Rol");
    }

    return updatedRol;
  }
}
