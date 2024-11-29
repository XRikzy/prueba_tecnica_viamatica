import { RolOption } from "../../../config/model/roloptions.model";
import { RolOptionRepository } from "../../../domain/repositories/roloption.repository";
import { CreateRolOptionDTO } from "../../dto/roloption.dto";



export class CreateRolOptionUseCase {
  private RolOptionRepository: RolOptionRepository;

  constructor(userRepository: RolOptionRepository) {
    this.RolOptionRepository = userRepository;
  }

  async execute(data: CreateRolOptionDTO): Promise<RolOption> {
    const newUser = await this.RolOptionRepository.create(data);
    return newUser;
  }
}