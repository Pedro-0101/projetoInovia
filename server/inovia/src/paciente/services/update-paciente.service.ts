import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePacienteRepository } from '../repositories/update-paciente.repository';
import { PacienteDto } from '../dto/paciente.dto';
import { ReadPacienteRepository } from '../repositories/read-paciente.repository';

@Injectable()
export class UpdatePacienteService {
  constructor(
    private readonly updatePacienteRepository: UpdatePacienteRepository,
    private readonly readPacienteRepository: ReadPacienteRepository,
  ) {}

  async execute(id: string, paciente: PacienteDto): Promise<PacienteDto> {
    const existePaciente = await this.readPacienteRepository.findById(id);
    if (!existePaciente) {
      throw new NotFoundException('Paciente nao encontrado');
    }
    return await this.updatePacienteRepository.execute(id, paciente);
  }
}
