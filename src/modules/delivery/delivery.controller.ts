import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '../auth/auth.guard';
import { DeliveryService } from './delivery.service';

type CreateDeliveryBody = { items: string[] };

@Controller('delivery')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  async create(@Req() req: Request, @Body() { items }: CreateDeliveryBody) {
    const clientId = req.user;
    return this.deliveryService.create({
      items,
      clientId,
    });
  }

  @Get('available')
  async findAvailable() {
    return this.deliveryService.findAvailable();
  }
}
