import { Client } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { SaveClientDTO } from '../../dto/save-client.dto';
import { ClientRepository } from '../client-repository';

export class FakeClientRepository implements ClientRepository {
  private repository: Client[] = [];

  async save(dto: SaveClientDTO): Promise<Client> {
    const client = {
      id: randomUUID(),
      ...dto,
    } as Client;
    this.repository.push(client);
    return client;
  }

  async findByEmail(email: string): Promise<Client | null> {
    return this.repository.find((client) => client.email === email) || null;
  }
}
