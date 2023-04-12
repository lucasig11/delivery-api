import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class SaveDeliverymanDTO {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
