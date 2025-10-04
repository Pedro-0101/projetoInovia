import { Module } from '@nestjs/common';
import { ConsultaController } from './consulta.controller';
import { CreateConsultaRepository } from './repositories/create-consulta.repository';
import { CreateConsultaService } from './services/create-consulta.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Consulta, ConsultaSchema } from './Schema/consulta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Consulta.name, schema: ConsultaSchema}])
  ],
  controllers: [ConsultaController],
  providers: [CreateConsultaRepository, CreateConsultaService],
  exports: [CreateConsultaRepository, CreateConsultaService]
})
export class ConsultaModule {}
