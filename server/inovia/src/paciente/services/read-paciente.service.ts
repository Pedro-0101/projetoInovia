import { Injectable } from '@nestjs/common';
import { ReadPacienteRepository } from '../repositories/read-paciente.repository';
import { FilterPacienteDto } from '../dto/filterPaciente.dto';
import { PacienteDto } from '../dto/paciente.dto';

@Injectable()
export class ReadPacienteService {
  constructor(
    private readonly readPacienteRepository: ReadPacienteRepository,
  ) {}

  async execute(filter?: FilterPacienteDto): Promise<PacienteDto[]> {
    return this.readPacienteRepository.execute(filter);
  }
}
