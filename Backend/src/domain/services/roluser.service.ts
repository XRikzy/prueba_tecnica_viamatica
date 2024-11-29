import {
  CreateRolUserDTO,
  UpdateRolUserDTO,
} from "../../application/dto/roluser.dto";
import { CreateRolUserUseCase, DeleteRolUserUseCase, GetRolUserUseCase, UpdateRolUserUseCase } from "../../application/use-cases/RolUser";
import { RolUserRepository } from "../repositories/roluser.repository";

export class RolUserServices {
  private RolUserRepository = new RolUserRepository();

  private createRolUserUseCase = new CreateRolUserUseCase(this.RolUserRepository);
  private getRolUserUseCase = new GetRolUserUseCase(this.RolUserRepository);
  private updateRolUserUseCase = new UpdateRolUserUseCase(this.RolUserRepository);
  private deleteRolUserUseCase = new DeleteRolUserUseCase(this.RolUserRepository);
  
  async createRolUser(data: CreateRolUserDTO) {
    return await this.createRolUserUseCase.execute(data);
  }
  async getAllRolUser() {
    return await this.getRolUserUseCase.getAll();
  }
  async getByUserId(idUser: number) {
    return await this.getRolUserUseCase.getByUserId(idUser);
  }
  async getById(id: number) {
    return await this.getRolUserUseCase.execute(id);
  }
  async updateRolUser(id: number, data: UpdateRolUserDTO) {
    return await this.updateRolUserUseCase.execute(id, data);
  }
  async deleteRolUser(id: number) {
    return await this.deleteRolUserUseCase.execute(id);
  }
}
