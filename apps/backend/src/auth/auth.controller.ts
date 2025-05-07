import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from '../DTOs/auth-register.dto';
import { AuthLoginDto } from '../DTOs/auth-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body: AuthRegisterDto) {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: AuthLoginDto) {
    const { email, password } = body;
    return this.authService.login(email, password);
  }
}
