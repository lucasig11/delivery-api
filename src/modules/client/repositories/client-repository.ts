import { Client } from '@prisma/client';
import { SaveClientDTO } from 'src/modules/client/dto/save-client.dto';

export abstract class ClientRepository {
  abstract save(dto: SaveClientDTO): Promise<Client>;
  abstract findByEmail(email: string): Promise<Client | null>;
}
