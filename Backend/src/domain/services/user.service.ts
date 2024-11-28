import { UserRepository } from '../repositories/user.repository';
import { CreateUserDTO, UpdateUserDTO } from '../../application/dto/user.dto';
import { CreateUserUseCase, DeleteUserUseCase, GetUserUseCase, UpdateUserUseCase } from '../../application/use-cases/User';

export class UserService {
  private userRepository = new UserRepository();

  private createUserUseCase = new CreateUserUseCase(this.userRepository);
  private getUserUseCase = new GetUserUseCase(this.userRepository);
  private updateUserUseCase = new UpdateUserUseCase(this.userRepository);
  private deleteUserUseCase = new DeleteUserUseCase(this.userRepository);

  async createUser(data: CreateUserDTO) {
    return this.createUserUseCase.execute(data);
  }

  async getUser(id: number) {
    return this.getUserUseCase.execute(id);
  }

  async getAllUsers() {
    return this.getUserUseCase.getAll();
  }

  async updateUser(id: number, data: UpdateUserDTO) {
    return this.updateUserUseCase.execute(id, data);
  }

  async deleteUser(id: number) {
    return this.deleteUserUseCase.execute(id);
  }
}

