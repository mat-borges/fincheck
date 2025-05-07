import * as bcrypt from 'bcrypt';

import { CreateUserDto } from 'src/DTOs/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  getUser(id: UUID) {
    return this.usersRepository.getUser(id);
  }

  getUsers() {
    return this.usersRepository.getUsers();
  }

  async createUser(user: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return this.usersRepository.createUser({ ...user, password: hashedPassword });
  }
}
