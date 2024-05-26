import { Injectable } from '@nestjs/common';
import { QueryRepository } from 'src/neo4j/query.repository';
import { node } from 'cypher-query-builder';
import { Entities, User, UserInput } from 'src/schema/graphql';

@Injectable()
export class UserRepository {
  constructor(private readonly queryRepository: QueryRepository) {}

  async createUser(user: UserInput): Promise<User> {
    console.log('creating user');
    const { userName, fullName, email, password, userID } = user;
    const query = await this.queryRepository
      .initQuery()
      .createNode(Entities.User, Entities.User, {
        userID,
        userName,
        fullName,
        email,
        password,
      })
      .return(Entities.User)
      .run();

    if (query?.length > 0) {
      const {
        [Entities.User]: { identity, properties },
      } = query[0];
      return {
        ...properties,
      };
    }
  }

  async deleteUser(id: string): Promise<boolean> {
    await this.queryRepository
      .initQuery()
      .match(node([Entities.User, Entities.User]))
      .where({
        [`${Entities.User}.userID`]: id,
      })
      .delete(Entities.User)
      .run();
    return true;
  }
  async updateUser(id: string, user: UserInput): Promise<User> {
    const { userName, fullName, email, password } = user;
    let updateObject = {};
    if (userName) {
      updateObject = {
        [`${Entities.User}.userName`]: userName,
      };
    }
    if (fullName) {
      updateObject = {
        ...updateObject,
        [`${Entities.User}.fullName`]: fullName,
      };
    }
    if (email) {
      updateObject = {
        ...updateObject,
        [`${Entities.User}.email`]: email,
      };
    }

    if (password) {
      updateObject = {
        ...updateObject,
        [`${Entities.User}.password`]: password,
      };
    }
    const query = await this.queryRepository
      .initQuery()
      .match([node(Entities.User, Entities.User)])
      .where({
        [`${Entities.User}.userID`]: id,
      })
      .setValues(updateObject)
      .return(Entities.User)
      .run();

    if (query?.length > 0) {
      const {
        [Entities.User]: { identity, properties },
      } = query[0];
      return {
        ...properties,
      };
    }
  }
  async login(email: string, password: string): Promise<User> {
    console.log(email, password);
    const query = await this.queryRepository
      .initQuery()
      .raw(
        `
        MATCH (u:User {email: "${email}", password: "${password}"})
        RETURN u.email as email,u.password as password,u.userID as userID,u.userName as userName
        `,
      )
      .run();

    console.log(query);
    if (query?.length > 0) {
      return query[0] as User;
    }
    return null;
  }
  async getUser(id: string): Promise<User> {
    const query = await this.queryRepository
      .initQuery()
      .match([node(Entities.User, Entities.User)])
      .where({
        [`${Entities.User}.userID`]: id,
      })
      .return(Entities.User)
      .run();

    if (query?.length > 0) {
      const {
        [Entities.User]: { identity, properties },
      } = query[0];
      return {
        ...properties,
      };
    }
    return null;
  }
}
