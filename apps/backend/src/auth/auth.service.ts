import * as bcrypt from 'bcrypt';

import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthRegisterDto } from '../DTOs/auth-register.dto';
import { CreateUserDto } from 'src/DTOs/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  private EXPIRATION_TIME = '7 days';
  private ISSUER = 'FinCheck';
  private AUDIENCE = 'users';

  constructor(
    private readonly jwtService: JwtService,
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async createToken(user: CreateUserDto) {
    const token = this.jwtService.sign(
      {
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: this.EXPIRATION_TIME,
        subject: user.id,
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      },
    );

    return { accessToken: token };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        audience: this.AUDIENCE,
        issuer: this.ISSUER,
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Email or password not valid');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Email or password not valid');

    return this.createToken(user);
  }

  async register(data: AuthRegisterDto) {
    const user = await this.usersService.createUser(data);

    return this.createToken(user);
  }
}
