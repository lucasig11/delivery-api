import { Delivery } from '@prisma/client';
import { CreateDeliveryDTO } from '../dto/save-delivery.dto';

export abstract class DeliveryRepository {
  abstract create(dto: CreateDeliveryDTO): Promise<Delivery>;
}
