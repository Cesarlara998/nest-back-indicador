import { Test, TestingModule } from '@nestjs/testing';
import { DolarController } from './dolar.controller';

describe('DolarController', () => {
  let controller: DolarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DolarController],
    }).compile();

    controller = module.get<DolarController>(DolarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
