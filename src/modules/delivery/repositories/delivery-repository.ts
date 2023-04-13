import { Delivery } from '@prisma/client';
import { CreateDeliveryDTO } from '../dto/create-delivery.dto';

export abstract class DeliveryRepository {
  abstract create(dto: CreateDeliveryDTO): Promise<Delivery>;
  abstract save(delivery: Delivery): Promise<Delivery>;
  abstract findById(id: string): Promise<Delivery | null>;
  abstract findAvailable(): Promise<Delivery[]>;
}
