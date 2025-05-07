import { IsEmail, IsString, MinLength } from 'class-validator';

import { CreateUserDto } from './create-user.dto';

export class AuthRegisterDto extends CreateUserDto {}
