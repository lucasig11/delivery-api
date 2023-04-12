import { BadRequestException, Injectable } from '@nestjs/common';
import { Deliveryman } from '@prisma/client';
import { hash } from 'bcrypt';
import { SaveDeliverymanDTO } from './dto/save-deliveryman.dto';
import { DeliverymanRepository } from './repositories/deliveryman-repository';

@Injectable()
export class DeliverymanService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async create(dto: SaveDeliverymanDTO) {
    const exists = await this.deliverymanRepository.findByEmail(dto.email);
    if (exists) {
      throw new BadRequestException('Email already in use');
    }
    const hashed = await hash(dto.password, 10);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = await this.deliverymanRepository.save({
      ...dto,
      password: hashed,
    });

    return result;
  }

  async findByEmail(email: string): Promise<Deliveryman | null> {
    return this.deliverymanRepository.findByEmail(email);
  }
}
