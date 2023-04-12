import { Injectable } from '@nestjs/common';
import { Delivery } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateDeliveryDTO } from '../../dto/save-delivery.dto';
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
}
