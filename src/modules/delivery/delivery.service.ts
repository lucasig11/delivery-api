import { Injectable } from '@nestjs/common';
import { Delivery } from '@prisma/client';
import { CreateDeliveryDTO } from './dto/create-delivery.dto';
import { DeliveryRepository } from './repositories/delivery-repository';

@Injectable()
export class DeliveryService {
  constructor(private deliveryRepository: DeliveryRepository) {}

  async create(dto: CreateDeliveryDTO): Promise<Delivery> {
    return this.deliveryRepository.create(dto);
  }

  async findAvailable(): Promise<Delivery[]> {
    return this.deliveryRepository.findAvailable();
  }
}
