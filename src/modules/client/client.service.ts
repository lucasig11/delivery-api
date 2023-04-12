import { BadRequestException, Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { hash } from 'bcrypt';
import { SaveClientDTO } from './dto/save-client.dto';
import { ClientRepository } from './repositories/client-repository';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  async create(dto: SaveClientDTO) {
    const exists = await this.clientRepository.findByEmail(dto.email);
    if (exists) {
      throw new BadRequestException('Email already in use');
    }
    const hashed = await hash(dto.password, 10);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = await this.clientRepository.save({
      ...dto,
      password: hashed,
    });

    return result;
  }

  async findByEmail(email: string): Promise<Client | null> {
    return await this.clientRepository.findByEmail(email);
  }
}
