import { CreateRolDTO, UpdateRolDTO } from "../../application/dto/rol.dto";
import { CreateRolUseCase, DeleteRolUseCase, GetRolUseCase, UpdateRolUseCase } from "../../application/use-cases/Rol";
import { RolRepository } from "../repositories/rol.repository";



export class RolService {
  private RolRepository = new RolRepository();

  private createRolUseCase = new CreateRolUseCase(this.RolRepository);
  private getRolUseCase = new GetRolUseCase(this.RolRepository);
  private updateRolUseCase = new UpdateRolUseCase(this.RolRepository);
  private deleteRolUseCase = new DeleteRolUseCase(this.RolRepository);

  async createRol(data: CreateRolDTO) {
    return this.createRolUseCase.execute(data);
  }

  async getRol(id: number) {
    return this.getRolUseCase.execute(id);
  }

  async getAllRols() {
    return this.getRolUseCase.getAll();
  }

  async updateRol(id: number, data: UpdateRolDTO) {
    return this.updateRolUseCase.execute(id, data);
  }

  async deleteRol(id: number) {
    return this.deleteRolUseCase.execute(id);
  }
}