import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SaveClientDTO } from 'src/modules/client/dto/save-client.dto';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: SaveClientDTO) {
    return this.clientService.create(dto);
  }
}
