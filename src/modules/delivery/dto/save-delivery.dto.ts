import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateDeliveryDTO {
  @IsArray()
  @IsNotEmpty()
  items: string[];

  @IsString()
  @IsNotEmpty()
  clientId: string;
}
