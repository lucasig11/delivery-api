import { IsNotEmpty } from 'class-validator';

export class AuthenticateClientDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
