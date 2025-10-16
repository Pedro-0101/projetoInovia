import { Injectable } from '@nestjs/common';
import { CreateConsultaRepository } from '../repositories/create-consulta.repository';
import { ConsultaDto } from '../dtos/consulta.dto';

@Injectable()
export class CreateConsultaService {
  constructor(
    private readonly createConsultaRepository: CreateConsultaRepository,
  ) {}

  async execute(consulta: ConsultaDto): Promise<ConsultaDto> {
    const newConsulta = await this.createConsultaRepository.execute(consulta);
    return newConsulta;
  }
}
