import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Paciente, PacienteDocument } from '../Schema/paciente.schema';
import { Model } from 'mongoose';
import { PacienteDto } from '../dto/paciente.dto';
import { FilterPacienteDto } from '../dto/filterPaciente.dto';

@Injectable()
export class ReadPacienteRepository {
  constructor(
    @InjectModel(Paciente.name) private pacienteModel: Model<PacienteDocument>,
  ) {}

  async findById(id: string): Promise<PacienteDto | null> {
    const paciente = await this.pacienteModel.findById(id).exec();
    return paciente ? paciente.toObject() : null;
  }

  async execute(filter?: FilterPacienteDto): Promise<PacienteDto[]> {
    const query = this.pacienteModel.find(filter ?? {});
    const pacientes = await query.sort({ nome: 1 }).exec();
    return pacientes.map((paciente) => paciente.toObject());
  }
}
