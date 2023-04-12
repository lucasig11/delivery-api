import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { DeliverymanService } from './deliveryman.service';
import { SaveDeliverymanDTO } from './dto/save-deliveryman.dto';

@Controller('deliveryman')
export class DeliverymanController {
  constructor(private deliverymanService: DeliverymanService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: SaveDeliverymanDTO) {
    return this.deliverymanService.create(dto);
  }
}
