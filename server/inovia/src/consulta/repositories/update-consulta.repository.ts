import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Consulta, ConsultaDocument } from '../Schema/consulta.schema';
import { Model } from 'mongoose';
import { ConsultaDto } from '../dtos/consulta.dto';

@Injectable()
export class UpdateConsultaRepository {
  constructor(
    @InjectModel(Consulta.name) private consultaModel: Model<ConsultaDocument>,
  ) {}

  async execute(id: string, consulta: ConsultaDto): Promise<ConsultaDto> {
    const updatedConsulta = await this.consultaModel
      .findByIdAndUpdate(id, consulta, { new: true })
      .exec();

    if (!updatedConsulta) {
      throw new NotFoundException('Consulta nao encontrada');
    }

    return updatedConsulta.toObject();
  }
}
