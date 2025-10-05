import { Injectable } from '@nestjs/common';
import { CreatePacienterepository } from '../repositories/create-paciente.repository';
import { PacienteDto } from '../dto/paciente.dto';

@Injectable()
export class CreatePacienteService {
  constructor(
    private readonly createPacienteRepository: CreatePacienterepository,
  ) {}
  async execute(paciente: PacienteDto): Promise<PacienteDto> {
    let newPaciente = await this.createPacienteRepository.execute(paciente);
    return newPaciente;
  }
}

