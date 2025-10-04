import { Module } from '@nestjs/common';
import { NutricionistaController } from './nutricionista.controller';

@Module({
  controllers: [NutricionistaController]
})
export class NutricionistaModule {}
