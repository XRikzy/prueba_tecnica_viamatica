import { UserRepository } from "../repositories/user.repository";
import { CreateUserDTO, UpdateUserDTO } from "../../application/dto/user.dto";
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
} from "../../application/use-cases/User";
import { CreatePersonDTO } from "../../application/dto/person.dto";
import { GenerateUserUseCase } from "../../application/use-cases/User/generateuser.usecase";
import { PersonRepository } from "../repositories/person.repository";
import { UnlockUserUseCase } from "../../application/use-cases/User/unlockuser.usecase";

export class UserService {
  private userRepository = new UserRepository();
  private createUserUseCase = new CreateUserUseCase(this.userRepository);
  private getUserUseCase = new GetUserUseCase(this.userRepository);
  private updateUserUseCase = new UpdateUserUseCase(this.userRepository);
  private deleteUserUseCase = new DeleteUserUseCase(this.userRepository);
  private generateUserUseCase = new GenerateUserUseCase();
  private unlockedUserUserCase = new UnlockUserUseCase(this.userRepository)

  async createUser(data: CreateUserDTO) {
    return this.createUserUseCase.execute(data);
  }
  async generateUser(data: CreateUserDTO) {
    return await this.generateUserUseCase.execute(data);
    
  }
  async getUser(id: number) {
    return await this.getUserUseCase.execute(id);
  }

  async getAllUsers() {
    return await this.getUserUseCase.getAll();
  }

  async updateUser(id: number, data: UpdateUserDTO) {
    return await this.updateUserUseCase.execute(id, data);
  }

  async deleteUser(id: number) {
    return await this.deleteUserUseCase.execute(id);
  }
  async unlockedUser (id: number){
    return await this.unlockedUserUserCase.execute(id)
  }
}
