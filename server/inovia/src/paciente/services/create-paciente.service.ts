import { Injectable } from '@nestjs/common';
import { CreatePacienterepository } from '../repositories/create-paciente.repository';
import { IPacienteEntity } from '../interfaces/IPacienteEntity';

@Injectable()
export class CreatePacienteService {
  constructor(
    private readonly createPacienteRepository: CreatePacienterepository,
  ) {}
  async execute(paciente: IPacienteEntity): Promise<IPacienteEntity> {
    let newPaciente = await this.createPacienteRepository.execute(paciente);
    return newPaciente;
  }
}
