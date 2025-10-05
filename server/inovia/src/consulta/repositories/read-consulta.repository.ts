import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Consulta, ConsultaDocument } from '../Schema/consulta.schema';
import { Model } from 'mongoose';
import { FilterConsultaDto } from '../dtos/consultaFilter.dto';
import { ConsultaDto } from '../dtos/consulta.dto';

@Injectable()
export class ReadConsultaRepository {
  constructor(
    @InjectModel(Consulta.name) private consultaModel: Model<ConsultaDocument>,
  ) {}

  async execute(filter: FilterConsultaDto): Promise<ConsultaDto[]> {
    const query = this.consultaModel.find(filter ?? {});
    const consultas = await query.sort({inicio: 1}).exec();
    return consultas.map((consulta) => consulta.toObject());
  }

  async executeOne(filter: FilterConsultaDto): Promise<ConsultaDto | null> {
    const consulta = await this.consultaModel
      .findOne(filter ?? {})
      .sort({ inicio: 1 })
      .exec();
    return consulta ? consulta.toObject() : null;
  }
}
