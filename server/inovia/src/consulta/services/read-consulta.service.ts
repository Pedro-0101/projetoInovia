import { Injectable } from '@nestjs/common';
import { FilterConsultaDto } from '../dtos/consultaFilter.dto';
import { ConsultaDto } from '../dtos/consulta.dto';
import { ReadConsultaRepository } from '../repositories/read-consulta.repository';

@Injectable()
export class ReadConsultaService {
  constructor(
    private readonly readConsultaRepository: ReadConsultaRepository,
  ) {}

  async execute(filter?: FilterConsultaDto): Promise<ConsultaDto[]> {
    return this.readConsultaRepository.execute(filter);
  }

  async executeOne(filter?: FilterConsultaDto): Promise<ConsultaDto | null> {
    return this.readConsultaRepository.executeOne(filter);
  }
}
