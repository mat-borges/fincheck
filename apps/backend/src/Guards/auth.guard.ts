import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { UsersService } from 'src/users/users.service';
import { parse } from 'path';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = this.authService.checkToken((authorization ?? '').split(' ')[1]);
      const user = await this.usersService.getUser(data.sub);

      request.user = user;
    } catch (error) {
      console.log(error);
      return false;
    }

    return true;
  }
}
