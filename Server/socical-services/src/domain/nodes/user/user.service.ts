import { Injectable } from '@nestjs/common';
import { User, UserInput } from 'src/schema/graphql';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: UserInput): Promise<User> {
    return await this.userRepository.createUser(user);
  }

  async deleteUser(id: string): Promise<boolean> {
    return await this.userRepository.deleteUser(id);
  }

  async updateUser(id: string, user: UserInput): Promise<User> {
    return await this.userRepository.updateUser(id, user);
  }

  async login(email: string, password: string): Promise<User> {
    return await this.userRepository.login(email, password);
  }
  async getUser(id: string): Promise<User> {
    return await this.userRepository.getUser(id);
  }
}
