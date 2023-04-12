import { Injectable } from '@nestjs/common';
import { Deliveryman } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { SaveDeliverymanDTO } from '../../dto/save-deliveryman.dto';
import { DeliverymanRepository } from '../deliveryman-repository';

@Injectable()
export class PrismaDeliverymanRepository implements DeliverymanRepository {
  constructor(private prisma: PrismaService) {}
  async save(deliveryman: SaveDeliverymanDTO): Promise<Deliveryman> {
    return this.prisma.deliveryman.create({ data: { ...deliveryman } });
  }

  async findByEmail(email: string): Promise<Deliveryman | null> {
    return this.prisma.deliveryman.findUnique({ where: { email } });
  }
}
