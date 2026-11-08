
import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

describe('HealthController', () => {
  let controller: HealthController;

  const mockHealthService = {
    getStatus: jest.fn().mockReturnValue({
      status: 'ok',
      service: 'contact-center-api',
      timestamp: '2026-11-08T00:00:00.000Z',
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: mockHealthService,
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return health status', () => {
    expect(controller.check()).toEqual({
      status: 'ok',
      service: 'contact-center-api',
      timestamp: '2026-11-08T00:00:00.000Z',
    });

    expect(mockHealthService.getStatus).toHaveBeenCalled();
  });
});
