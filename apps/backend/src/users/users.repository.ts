import { CreateUserDto } from '../DTOs/create-user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  getUser(id: UUID) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async createUser(user: CreateUserDto) {
    return await this.prisma.user.create({
      data: user,
    });
  }
}
