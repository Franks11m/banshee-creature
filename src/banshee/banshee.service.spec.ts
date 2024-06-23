/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { BansheeService } from './banshee.service';

describe('BansheeService', () => {
  let service: BansheeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BansheeService],
    }).compile();

    service = module.get<BansheeService>(BansheeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
