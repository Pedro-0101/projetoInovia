import { Module } from '@nestjs/common';
import { NutricionistaController } from './nutricionista.controller';
import {
  Nutricionista,
  NutricionistaSchema,
} from './Schema/nutricionista.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateNutricionistaRepository } from './repositories/create-nutricionista.repository';
import { CreateNutricionistaService } from './services/create-nutricionista.service';
import { UpdateNutricionistaRepository } from './repositories/update-nutricionista.repository';
import { UpdateNutricionistaService } from './services/update-nutricionista.service';
import { ReadNutricionistaRepository } from './repositories/read-nutricionista.repository';
import { ReadNutricionistaService } from './services/read-nutricionista.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Nutricionista.name, schema: NutricionistaSchema },
    ]),
  ],
  controllers: [NutricionistaController],
  providers: [
    CreateNutricionistaRepository,
    CreateNutricionistaService,
    UpdateNutricionistaRepository,
    UpdateNutricionistaService,
    ReadNutricionistaRepository,
    ReadNutricionistaService,
  ],
  exports: [
    CreateNutricionistaRepository,
    CreateNutricionistaService,
    UpdateNutricionistaRepository,
    UpdateNutricionistaService,
    ReadNutricionistaRepository,
    ReadNutricionistaService,
  ],
})
export class NutricionistaModule {}
