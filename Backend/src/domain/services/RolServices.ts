import { Rol } from "../../config/model/Rol";
import { RolRepository } from "../repositories/RolRepository";

export class RolServices {
  private RolRepository: RolRepository;

  constructor(RolRepository: RolRepository) {
    this.RolRepository = RolRepository;
  }
  async createRol(RolData: Partial<Rol>) {
    return await this.RolRepository.create(RolData);
  }
  async createManyRol(RolData: Partial<Rol>[]) {
    return await this.RolRepository.createMany(RolData);
  }
  async getAllRol() {
    return await this.RolRepository.getAll();
  }
  async getRolByRolName(RolName: string) {
    return await this.RolRepository.getByRolName(RolName);
  }
  async getRolById(id: number) {
    return await this.RolRepository.getById(id);
  }
  async updateRol(id: number, userData: any) {
    return await this.RolRepository.update(id, userData);
  }
  async deleteRol(id: number) {
    return await this.RolRepository.delete(id);
  }
}