import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePacienteService } from './services/create-paciente.service';
import type { PacienteDto } from './dto/paciente.dto';
import { ApiQuery } from '@nestjs/swagger';
import { ReadPacienteService } from './services/read-paciente.service';
import { FilterPacienteDto } from './dto/filterPaciente.dto';
import { UpdatePacienteService } from './services/update-paciente.service';

@Controller('paciente')
export class PacienteController {
  constructor(
    private readonly createPacienteService: CreatePacienteService,
    private readonly readPacienteService: ReadPacienteService,
    private readonly updatePacienteService: UpdatePacienteService,
  ) {}

  @Post()
  async create(@Body() paciente: PacienteDto): Promise<PacienteDto> {
    return await this.createPacienteService.execute(paciente);
  }

  @Get('buscar')
  @ApiQuery({ name: 'id', required: false, type: String })
  @ApiQuery({ name: 'nome', required: false, type: String })
  @ApiQuery({ name: 'email', required: false, type: String })
  @ApiQuery({ name: 'telefone', required: false, type: String })
  @ApiQuery({
    name: 'dn',
    required: false,
    type: String,
    format: 'date-time',
  })
  @ApiQuery({ name: 'biotipo', required: false, type: String })
  @ApiQuery({ name: 'cpf', required: false, type: String })
  async list(@Query() filter: FilterPacienteDto): Promise<PacienteDto[]> {
    return await this.readPacienteService.execute(filter);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() paciente: PacienteDto,
  ): Promise<PacienteDto> {
    return await this.updatePacienteService.execute(id, paciente);
  }
}
