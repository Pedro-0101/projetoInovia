import { Module } from '@nestjs/common';
import { NutricionistaController } from './nutricionista.controller';
import {
  Nutricionista,
  NutricionistaSchema,
} from './Schema/nutricionista.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateNutricionistaRepository } from './repositories/create-nutricionista.repository';
import { CreateNutricionistaService } from './services/create-nutricionista.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Nutricionista.name, schema: NutricionistaSchema },
    ]),
  ],
  controllers: [NutricionistaController],
  providers: [CreateNutricionistaRepository, CreateNutricionistaService],
  exports: [CreateNutricionistaRepository, CreateNutricionistaService],
})
export class NutricionistaModule {}
