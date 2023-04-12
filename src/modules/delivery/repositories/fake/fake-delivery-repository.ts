import { Delivery } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { CreateDeliveryDTO } from '../../dto/create-delivery.dto';
import { DeliveryRepository } from '../delivery-repository';

export class FakeDeliveryRepository implements DeliveryRepository {
  private repository: Delivery[] = [];

  async create(dto: CreateDeliveryDTO): Promise<Delivery> {
    const delivery = {
      id: randomUUID(),
      ...dto,
    } as Delivery;
    this.repository.push(delivery);
    return delivery;
  }
}
