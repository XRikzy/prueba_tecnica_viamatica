import { CreateRolOptionDTO } from "../../application/dto/roloption.dto";
import { CreateRolOptionUseCase, DeleteRolOptionUseCase, GetRolOptionUseCase, UpdateRolOptionUseCase } from "../../application/use-cases/RolOption";
import { RolOption } from "../../config/model/roloptions.model";
import { RolOptionRepository } from "../repositories/roloption.repository";

export class RolOptionServices {
  private RolOptionRepository = new RolOptionRepository();

  private createRolOptionUseCase = new CreateRolOptionUseCase(this.RolOptionRepository);
  private getRolOptionUseCase = new GetRolOptionUseCase(this.RolOptionRepository);
  private updateRolOptionUseCase = new UpdateRolOptionUseCase(this.RolOptionRepository);
  private deleteRolOptionUseCase = new DeleteRolOptionUseCase(this.RolOptionRepository);

  async createRolOption(RolOptionData: CreateRolOptionDTO) {
    return await this.createRolOptionUseCase.execute(RolOptionData);
  }
  async getAllRolOption() {
    return await this.getRolOptionUseCase.getAll();
  }
  async getRolOptionByRolOptionName(RolOptionName: string) {
    return await this.getRolOptionUseCase.getRolOptionByName(RolOptionName);
  }
  async getRolOptionById(id: number) {
    return await this.getRolOptionUseCase.execute(id);
  }
  async updateRolOption(id: number, userData: any) {
    return await this.updateRolOptionUseCase.execute(id, userData);
  }
  async deleteRolOption(id: number) {
    return await this.deleteRolOptionUseCase.execute(id);
  }
}