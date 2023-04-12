import { Deliveryman } from '@prisma/client';
import { SaveDeliverymanDTO } from '../dto/save-deliveryman.dto';

export abstract class DeliverymanRepository {
  abstract save(deliveryman: SaveDeliverymanDTO): Promise<Deliveryman>;
  abstract findByEmail(email: string): Promise<Deliveryman | null>;
}
