import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
  async list(@Body() filter: FilterConsultaDto): Promise<ConsultaDto[]> {
    return this.readConsultaService.execute(filter);
  }
}
