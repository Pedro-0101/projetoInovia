import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateConsultaRepository } from '../repositories/update-consulta.repository';
import { ConsultaDto } from '../dtos/consulta.dto';
import { ReadConsultaRepository } from '../repositories/read-consulta.repository';

@Injectable()
export class UpdateConsultaService {
  constructor(
    private readonly updateConsultaRepository: UpdateConsultaRepository,
    private readonly readConsultaRepository: ReadConsultaRepository,
  ) {}

  async execute(id: string, consulta: ConsultaDto): Promise<ConsultaDto> {
    const consultaExistente = await this.readConsultaRepository.findById(id);

    if (!consultaExistente) {
      throw new NotFoundException('Consulta nao encontrada');
    }

    const updatedConsulta = await this.updateConsultaRepository.execute(
      id,
      consulta,
    );
    return updatedConsulta;
  }
}
