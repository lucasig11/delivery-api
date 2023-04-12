import { Delivery } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { CreateDeliveryDTO } from '../../dto/create-delivery.dto';
import { DeliveryRepository } from '../delivery-repository';

export class FakeDeliveryRepository implements DeliveryRepository {
  private repository: Delivery[] = [];

  async create(dto: CreateDeliveryDTO): Promise<Delivery> {
    const delivery: Delivery = {
      id: randomUUID(),
      deliverymanId: null,
      endedAt: null,
      createdAt: new Date(),
      ...dto,
    };
    this.repository.push(delivery);
    return delivery;
  }

  async findAvailable(): Promise<Delivery[]> {
    return this.repository.filter(
      (delivery) =>
        delivery.deliverymanId === null && delivery.endedAt === null,
    );
  }
}
