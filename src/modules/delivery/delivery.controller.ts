import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { DeliveryService } from './delivery.service';

type IRequest = Request & { user: string };

@Controller('delivery')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Request() req: IRequest,
    @Body() { items }: { items: string[] },
  ) {
    const clientId = req.user;

    return this.deliveryService.create({
      items,
      clientId,
    });
  }
}
