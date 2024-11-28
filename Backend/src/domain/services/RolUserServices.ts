import { RolUser } from "../../config/model/Roluser";
import { RolUserRepository } from "../repositories/RoluserRepository";

export class RolUserServices {
  private RolUserRepository: RolUserRepository;

  constructor(RolUserRepository: RolUserRepository) {
    this.RolUserRepository = RolUserRepository;
  }
  async createRolUser(RolUserData: Partial<RolUser>) {
    return await this.RolUserRepository.create(RolUserData);
  }
  async createManyRolUser(RolUserData: Partial<RolUser>[]) {
    return await this.RolUserRepository.createMany(RolUserData);
  }
  async getAllRolUser() {
    return await this.RolUserRepository.getAll();
  }
  async getRolUserByRolUserName(idRol: number) {
    return await this.RolUserRepository.getByIdRol(idRol);
  }
  async getRolUserById(id: number) {
    return await this.RolUserRepository.getByIdUser(id);
  }
  async updateRolUser(id: number, userData: any) {
    return await this.RolUserRepository.update(id, userData);
  }
  async deleteRolUser(id: number) {
    return await this.RolUserRepository.delete(id);
  }
}