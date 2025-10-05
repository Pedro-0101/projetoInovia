import { Module } from '@nestjs/common';
import { ConsultaController } from './consulta.controller';
import { CreateConsultaRepository } from './repositories/create-consulta.repository';
import { CreateConsultaService } from './services/create-consulta.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Consulta, ConsultaSchema } from './Schema/consulta.schema';
import { UpdateConsultaService } from './services/update-consulta.service';
import { UpdateConsultaRepository } from './repositories/update-consulta.repository';
import { ReadConsultaRepository } from './repositories/read-consulta.repository';
import { ReadConsultaService } from './services/read-consulta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Consulta.name, schema: ConsultaSchema },
    ]),
  ],
  controllers: [ConsultaController],
  providers: [
    CreateConsultaRepository,
    CreateConsultaService,
    UpdateConsultaRepository,
    UpdateConsultaService,
    ReadConsultaRepository,
    ReadConsultaService,
  ],
  exports: [
    CreateConsultaRepository,
    CreateConsultaService,
    UpdateConsultaRepository,
    UpdateConsultaService,
    ReadConsultaRepository,
    ReadConsultaService,
  ],
})
export class ConsultaModule {}
