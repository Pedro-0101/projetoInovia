import { Injectable } from '@nestjs/common';
import { UpdateConsultaRepository } from '../repositories/update-consulta.repository';
import { ConsultaDto } from '../dtos/consulta.dto';

@Injectable()
export class UpdateConsultaService {
  constructor(
    private readonly updateConsultaRepository: UpdateConsultaRepository,
  ) {}

  async execute(
    id: string,
    consulta: ConsultaDto,
  ): Promise<ConsultaDto> {
    const updatedConsulta = await this.updateConsultaRepository.execute(
      id,
      consulta,
    );
    return updatedConsulta;
  }
}

