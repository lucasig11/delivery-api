import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { ClientRepository } from './repositories/client-repository';
import { FakeClientRepository } from './repositories/fake/fake-client-repository';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        { provide: ClientRepository, useClass: FakeClientRepository },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a client', async () => {
    const result = await service.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@email.com',
      password: '123456',
    });

    expect(result).toHaveProperty('id');
  });
});
