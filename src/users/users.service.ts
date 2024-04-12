import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

// This should be a real class/interface representing a user entity
export type User = {userId:number, username:string, password:string};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      userId: 2,
      username: 'maria',
      password: bcrypt.hashSync('1234', 10),
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    
    const result = this.users.find(user => user.username === username);
    
    return result
  }
}