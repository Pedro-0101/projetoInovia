import { Injectable } from '@nestjs/common';
import { CreateConsultaRepository } from '../repositories/create-consulta.repository';
import { IConsultaEntity } from '../interfaces/IConsultaEntity';

@Injectable()
export class CreateConsultaService {
  constructor(
    private readonly createConsultaRepository : CreateConsultaRepository,
  ) {}

  async execute(consulta: IConsultaEntity): Promise<IConsultaEntity> {
    let newConsulta = await this.createConsultaRepository.execute(consulta);
    return newConsulta;
  }
}
