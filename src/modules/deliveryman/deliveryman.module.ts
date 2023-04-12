import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DeliverymanController } from './deliveryman.controller';
import { DeliverymanService } from './deliveryman.service';
import { DeliverymanRepository } from './repositories/deliveryman-repository';
import { PrismaDeliverymanRepository } from './repositories/prisma/prisma-deliveryman-repository';

@Module({
  imports: [],
  controllers: [DeliverymanController],
  providers: [
    DeliverymanService,
    PrismaService,
    { provide: DeliverymanRepository, useClass: PrismaDeliverymanRepository },
  ],
  exports: [DeliverymanService],
})
export class DeliverymanModule {}
