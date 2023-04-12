import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryService } from './delivery.service';
import { DeliveryRepository } from './repositories/delivery-repository';
import { FakeDeliveryRepository } from './repositories/fake/fake-delivery-repository';

describe('DeliveryService', () => {
  let service: DeliveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeliveryService,
        { provide: DeliveryRepository, useClass: FakeDeliveryRepository },
      ],
    }).compile();

    service = module.get<DeliveryService>(DeliveryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a delivery', async () => {
    const delivery = await service.create({
      clientId: 'randomClientId',
      items: ['item1'],
    });

    expect(delivery).toBeDefined();
    expect(delivery.clientId).toBe('randomClientId');
  });

  it('should find available deliveries', async () => {
    await service.create({
      clientId: 'randomClientId',
      items: ['item1'],
    });
    const deliveries = await service.findAvailable();

    expect(deliveries).toBeDefined();
    expect(deliveries.length).toBe(1);
  });
});
