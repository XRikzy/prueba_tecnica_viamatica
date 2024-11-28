import { RolOption } from "../../config/model/RolOption";
import { RolOptionRepository } from "../repositories/RolOptionRepository";

export class RolOptionServices {
  private RolOptionRepository: RolOptionRepository;

  constructor(RolOptionRepository: RolOptionRepository) {
    this.RolOptionRepository = RolOptionRepository;
  }
  async createRolOption(RolOptionData: Partial<RolOption>) {
    return await this.RolOptionRepository.create(RolOptionData);
  }
  async createManyRolOption(RolOptionData: Partial<RolOption>[]) {
    return await this.RolOptionRepository.createMany(RolOptionData);
  }
  async getAllRolOption() {
    return await this.RolOptionRepository.getAll();
  }
  async getRolOptionByRolOptionName(RolOptionName: string) {
    return await this.RolOptionRepository.getByRolOptionName(RolOptionName);
  }
  async getRolOptionById(id: number) {
    return await this.RolOptionRepository.getById(id);
  }
  async updateRolOption(id: number, userData: any) {
    return await this.RolOptionRepository.update(id, userData);
  }
  async deleteRolOption(id: number) {
    return await this.RolOptionRepository.delete(id);
  }
}