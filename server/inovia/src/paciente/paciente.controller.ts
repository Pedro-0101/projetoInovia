import { Body, Controller, Post } from '@nestjs/common';
import { CreatePacienteService } from './services/create-paciente.service';
import type { IPacienteEntity } from './interfaces/IPacienteEntity';

@Controller('paciente')
export class PacienteController {
  constructor(
    private readonly createPacienteService : CreatePacienteService
  ){}

  @Post()
  async create(@Body() paciente: IPacienteEntity): Promise<IPacienteEntity> {
    return await this.createPacienteService.execute(paciente)
  }
}
