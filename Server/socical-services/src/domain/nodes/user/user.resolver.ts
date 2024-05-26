import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, UserInput } from 'src/schema/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation()
  async createUser(@Args('user') user: UserInput): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Mutation()
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    return await this.userService.deleteUser(id);
  }

  @Mutation()
  async updateUser(
    @Args('id') id: string,
    @Args('user') user: UserInput,
  ): Promise<User> {
    return await this.userService.updateUser(id, user);
  }

  @Query()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    return await this.userService.login(email, password);
  }

  @Query()
  async getUser(@Args('id') id: string): Promise<User> {
    return await this.userService.getUser(id);
  }
}
