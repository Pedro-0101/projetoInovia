import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { Paciente, PacienteSchema } from './Schema/paciente.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatePacienterepository } from './repositories/create-paciente.repository';
import { CreatePacienteService } from './services/create-paciente.service';

@Module({
  imports: [
      MongooseModule.forFeature([{name: Paciente.name, schema: PacienteSchema}])
    ],
  controllers: [PacienteController],
  providers: [CreatePacienterepository, CreatePacienteService],
  exports: [CreatePacienterepository, CreatePacienteService]
})
export class PacienteModule {}
