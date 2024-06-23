/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { BansheeController } from './banshee.controller';
import { BansheeService } from './banshee.service';

describe('BansheeController', () => {
  let controller: BansheeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BansheeController],
      providers: [BansheeService],
    }).compile();

    controller = module.get<BansheeController>(BansheeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
