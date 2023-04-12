import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { SaveClientDTO } from 'src/modules/client/dto/save-client.dto';
import { ClientRepository } from '../client-repository';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save({
    email,
    firstName,
    lastName,
    password,
  }: SaveClientDTO): Promise<Client> {
    return this.prisma.client.create({
      data: { firstName, lastName, password, email },
    });
  }

  async findByEmail(email: string): Promise<Client | null> {
    return this.prisma.client.findUnique({ where: { email } });
  }
}
