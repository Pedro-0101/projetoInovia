import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { CreateConsultaService } from './services/create-consulta.service';
import type { ConsultaDto } from './dtos/consulta.dto';
import { UpdateConsultaService } from './services/update-consulta.service';
import { ReadConsultaService } from './services/read-consulta.service';
import { FilterConsultaDto } from './dtos/consultaFilter.dto';

@Controller('consulta')
export class ConsultaController {
  constructor(
    private readonly createConsultaService: CreateConsultaService,
    private readonly updateConsultaService: UpdateConsultaService,
    private readonly readConsultaService: ReadConsultaService,
  ) {}

  @Post()
  async create(@Body() consulta: ConsultaDto): Promise<ConsultaDto> {
    return await this.createConsultaService.execute(consulta);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() consulta: ConsultaDto,
  ): Promise<ConsultaDto> {
    return this.updateConsultaService.execute(id, consulta);
  }

  @Get('buscar')
  @ApiQuery({ name: 'nutricionista', required: false, type: String })
  @ApiQuery({ name: 'paciente', required: false, type: String })
  @ApiQuery({ name: 'status', required: false, type: String })
  @ApiQuery({ name: 'inicioDe', required: false, type: String, format: 'date-time' })
  @ApiQuery({ name: 'inicioAte', required: false, type: String, format: 'date-time' })
  @ApiQuery({ name: 'terminoDe', required: false, type: String, format: 'date-time' })
  @ApiQuery({ name: 'terminoAte', required: false, type: String, format: 'date-time' })
  async list(@Query() filter: FilterConsultaDto): Promise<ConsultaDto[]> {
    return this.readConsultaService.execute(filter);
  }
}
