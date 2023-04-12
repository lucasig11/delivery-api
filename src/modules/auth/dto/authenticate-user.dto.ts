import { IsNotEmpty } from 'class-validator';

export class AuthenticateUserDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
