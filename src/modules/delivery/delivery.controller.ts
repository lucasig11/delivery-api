import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { DeliveryService } from './delivery.service';

type CreateDeliveryRequest = Request & { user: string };
type CreateDeliveryBody = { items: string[] };

@Controller('delivery')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Request() { user }: CreateDeliveryRequest,
    @Body() { items }: CreateDeliveryBody,
  ) {
    return this.deliveryService.create({
      items,
      clientId: user,
    });
  }
}
