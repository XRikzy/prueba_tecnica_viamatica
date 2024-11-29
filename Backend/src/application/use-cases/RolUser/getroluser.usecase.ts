import { RolUser } from "../../../config/model/roluser.model";
import { RolUserRepository } from "../../../domain/repositories/roluser.repository";

export class GetRolUserUseCase {
  private RolUserRepository: RolUserRepository;

  constructor(RolUserRepository: RolUserRepository) {
    this.RolUserRepository = RolUserRepository;
  }

  async execute(id: number): Promise<RolUser | null> {
    return this.RolUserRepository.findById(id);
  }

  async getAll(): Promise<RolUser[]> {
    return this.RolUserRepository.findAll();
  }
  async getByUserId(idUser: number): Promise<RolUser | null> {
    return this.RolUserRepository.getByIdUser(idUser);
  }
}
