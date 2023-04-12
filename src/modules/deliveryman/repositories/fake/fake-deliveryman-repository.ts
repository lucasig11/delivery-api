import { Deliveryman } from '@prisma/client';
import { SaveDeliverymanDTO } from '../../dto/save-deliveryman.dto';
import { DeliverymanRepository } from '../deliveryman-repository';

export class PrismaDeliverymanRepository implements DeliverymanRepository {
  private repository: Deliveryman[] = [];

  async save(deliveryman: SaveDeliverymanDTO): Promise<Deliveryman> {
    this.repository.push(deliveryman as Deliveryman);
    return deliveryman as Deliveryman;
  }

  async findByEmail(email: string): Promise<Deliveryman | null> {
    return (
      this.repository.find((deliveryman) => deliveryman.email === email) || null
    );
  }
}
