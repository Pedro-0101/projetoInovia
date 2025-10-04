import { Body, Controller, Post } from '@nestjs/common';
import { CreateConsultaService } from './services/create-consulta.service';
import type { IConsultaEntity } from './interfaces/IConsultaEntity';

@Controller('consulta')
export class ConsultaController {
  constructor(
    private readonly createConsultaService : CreateConsultaService
  ){}

  @Post()
  async create(@Body() consulta: IConsultaEntity): Promise<IConsultaEntity>{
    return await this.createConsultaService.execute(consulta);
  }
}
