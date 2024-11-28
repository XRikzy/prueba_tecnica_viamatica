import { RolRolOption } from "../../config/model/rolroloption.model";
import { RolRolOptionRepository } from "../repositories/rolroloption.respository";


export class RolRolOptionServices {
  private RolRolOptionRepository: RolRolOptionRepository;

  constructor(RolRolOptionRepository: RolRolOptionRepository) {
    this.RolRolOptionRepository = RolRolOptionRepository;
  }
  async createRolRolOption(RolRolOptionData: Partial<RolRolOption>) {
    return await this.RolRolOptionRepository.create(RolRolOptionData);
  }
  async createManyRolRolOption(RolRolOptionData: Partial<RolRolOption>[]) {
    return await this.RolRolOptionRepository.createMany(RolRolOptionData);
  }
  async getAllRolRolOption() {
    return await this.RolRolOptionRepository.getAll();
  }
  async getRolByIdOption(IdOption: number) {
    return await this.RolRolOptionRepository.getByIdRolOption(IdOption);
  }
  async getRolRolOptionById(id: number) {
    return await this.RolRolOptionRepository.getByIdRol(id);
  }
  async updateRolRolOption(id: number, userData: any) {
    return await this.RolRolOptionRepository.update(id, userData);
  }
  async deleteRolRolOption(id: number) {
    return await this.RolRolOptionRepository.delete(id);
  }
}