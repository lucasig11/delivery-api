import { Injectable } from '@nestjs/common';
import { Delivery } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateDeliveryDTO } from '../../dto/create-delivery.dto';
import { DeliveryRepository } from '../delivery-repository';

@Injectable()
export class PrismaDeliveryRepository implements DeliveryRepository {
  constructor(private prisma: PrismaService) {}

  async create({ items, clientId }: CreateDeliveryDTO): Promise<Delivery> {
    return this.prisma.delivery.create({
      data: {
        items,
        clientId,
      },
    });
  }

  async findAvailable(): Promise<Delivery[]> {
    return this.prisma.delivery.findMany({
      where: {
        deliverymanId: null,
        endedAt: null,
      },
    });
  }

  async findById(id: string): Promise<Delivery | null> {
    return this.prisma.delivery.findUnique({
      where: {
        id,
      },
    });
  }

  async save(delivery: Delivery): Promise<Delivery> {
    return this.prisma.delivery.update({
      where: {
        id: delivery.id,
      },
      data: delivery,
    });
  }
}
