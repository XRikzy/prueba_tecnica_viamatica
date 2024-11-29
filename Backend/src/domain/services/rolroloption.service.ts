import { CreateRolRolOptionDTO } from "../../application/dto/rolroloption.dto";
import { CreateRolRolOptionUseCase, DeleteRolRolOptionUseCase, GetRolRolOptionUseCase, UpdateRolRolOptionUseCase } from "../../application/use-cases/RolRolOption";
import { RolRolOptionRepository } from "../repositories/rolroloption.respository";

export class RolRolOptionServices {
  private RolRolOptionRepository = new RolRolOptionRepository();

  private createRolRolOptionUseCase = new CreateRolRolOptionUseCase(this.RolRolOptionRepository);
  private getRolRolOptionUseCase = new GetRolRolOptionUseCase(this.RolRolOptionRepository);
  private updateRolRolOptionUseCase = new UpdateRolRolOptionUseCase(this.RolRolOptionRepository);
  private deleteRolRolOptionUseCase = new DeleteRolRolOptionUseCase(this.RolRolOptionRepository);

  async createRolRolOption(RolRolOptionData: CreateRolRolOptionDTO) {
    return await this.createRolRolOptionUseCase.execute(RolRolOptionData);
  }
  async getAllRolRolOption() {
    return await this.getRolRolOptionUseCase.getAll();
  }
  async getRolByIdOption(IdOption: number) {
    return await this.getRolRolOptionUseCase.getByIdOption(IdOption);
  }
  async getRolRolOptionById(id: number) {
    return await this.getRolRolOptionUseCase.execute(id);
  }
  async updateRolRolOption(id: number, userData: any) {
    return await this.updateRolRolOptionUseCase.execute(id, userData);
  }
  async deleteRolRolOption(id: number) {
    return await this.deleteRolRolOptionUseCase.execute(id);
  }
}