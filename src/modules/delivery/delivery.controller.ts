import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Auth } from '../auth/auth.decorator';
import { AuthGuard } from '../auth/auth.guard';
import { DeliveryService } from './delivery.service';

type CreateDeliveryBody = { items: string[] };
type UpdateDeliverymanBody = { deliveryId: string };

@Controller('delivery')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Auth('client')
  async create(@Req() req: Request, @Body() { items }: CreateDeliveryBody) {
    const clientId = req.clientId;
    return this.deliveryService.create({
      items,
      clientId,
    });
  }

  @Get('available')
  @UseGuards(AuthGuard)
  @Auth('deliveryman')
  async findAvailable() {
    return this.deliveryService.findAvailable();
  }

  @Patch()
  @UseGuards(AuthGuard)
  @Auth('deliveryman')
  async updateDeliveryman(
    @Req() req: Request,
    @Body() { deliveryId }: UpdateDeliverymanBody,
  ) {
    const deliverymanId = req.deliverymanId;
    return this.deliveryService.updateDeliveryman(deliveryId, deliverymanId);
  }
}
