import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliveryRepository } from './repositories/delivery-repository';
import { PrismaDeliveryRepository } from './repositories/prisma/prisma-delivery-repository';

@Module({
  controllers: [DeliveryController],
  providers: [
    DeliveryService,
    PrismaService,
    { provide: DeliveryRepository, useClass: PrismaDeliveryRepository },
  ],
})
export class DeliveryModule {}
