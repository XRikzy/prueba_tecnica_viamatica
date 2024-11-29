import { RolRolOption } from "../../../config/model/rolroloption.model";
import { RolRolOptionRepository } from "../../../domain/repositories/rolroloption.respository";
import { CreateRolRolOptionDTO } from "../../dto/rolroloption.dto";


export class CreateRolRolOptionUseCase {
  private RolRolOptionRepository: RolRolOptionRepository;

  constructor(userRepository: RolRolOptionRepository) {
    this.RolRolOptionRepository = userRepository;
  }

  async execute(data: CreateRolRolOptionDTO): Promise<RolRolOption> {
    const newUser = await this.RolRolOptionRepository.create(data);
    return newUser;
  }
}