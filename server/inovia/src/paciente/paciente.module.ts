import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { Paciente, PacienteSchema } from './Schema/paciente.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatePacienterepository } from './repositories/create-paciente.repository';
import { CreatePacienteService } from './services/create-paciente.service';
import { ReadPacienteRepository } from './repositories/read-paciente.repository';
import { ReadPacienteService } from './services/read-paciente.service';
import { UpdatePacienteRepository } from './repositories/update-paciente.repository';
import { UpdatePacienteService } from './services/update-paciente.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Paciente.name, schema: PacienteSchema },
    ]),
  ],
  controllers: [PacienteController],
  providers: [
    CreatePacienterepository,
    CreatePacienteService,
    ReadPacienteRepository,
    ReadPacienteService,
    UpdatePacienteRepository,
    UpdatePacienteService,
  ],
  exports: [
    CreatePacienterepository,
    CreatePacienteService,
    ReadPacienteRepository,
    ReadPacienteService,
    UpdatePacienteRepository,
    UpdatePacienteService,
  ],
})
export class PacienteModule {}
