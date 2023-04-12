import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientRepository } from './repositories/client-repository';
import { PrismaClientRepository } from './repositories/prisma/prisma-client-repository';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [
    ClientService,
    PrismaService,
    { provide: ClientRepository, useClass: PrismaClientRepository },
  ],
  exports: [ClientService],
})
export class ClientModule {}
