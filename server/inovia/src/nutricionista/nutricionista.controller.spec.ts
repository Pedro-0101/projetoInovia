import { Test, TestingModule } from '@nestjs/testing';
import { NutricionistaController } from './nutricionista.controller';

describe('NutricionistaController', () => {
  let controller: NutricionistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutricionistaController],
    }).compile();

    controller = module.get<NutricionistaController>(NutricionistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
