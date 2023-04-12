import { Delivery } from '@prisma/client';
import { CreateDeliveryDTO } from '../dto/create-delivery.dto';

export abstract class DeliveryRepository {
  abstract create(dto: CreateDeliveryDTO): Promise<Delivery>;
  abstract findAvailable(): Promise<Delivery[]>;
}
