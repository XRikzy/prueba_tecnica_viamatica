import {UsersRepository } from '../repositories/UserRepository';

export class UserService {
  private userRepository: UsersRepository;

  constructor() {
    this.userRepository = new UsersRepository();
  }
  async createUser(userData: { UserName: string, Password: string, Mail: string, SessionActive: string, Person_idPerson2?: number, Status?: string }) {
    return await this.userRepository.create(userData);
  }
  async getAllUsers() {
    return await this.userRepository.getAll();
  }
  async getUserByUserName(userName: string) {
    return await this.userRepository.getByUsersName(userName);
  }
  async getUserById(id: number) {
    return await this.userRepository.getById(id);
  }
  async updateUser(id: number, userData: any) {
    return await this.userRepository.update(id, userData);
  }
  async deleteUser(id: number) {
    return await this.userRepository.delete(id);
  }
}
