import { Body, Controller, Post } from '@nestjs/common';
import { CreatePacienteService } from './services/create-paciente.service';
import type { PacienteDto } from './dto/paciente.dto';

@Controller('paciente')
export class PacienteController {
  constructor(
    private readonly createPacienteService : CreatePacienteService
  ){}

  @Post()
  async create(@Body() paciente: PacienteDto): Promise<PacienteDto> {
    return await this.createPacienteService.execute(paciente)
  }
}

