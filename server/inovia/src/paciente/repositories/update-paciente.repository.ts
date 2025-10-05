import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Paciente, PacienteDocument } from '../Schema/paciente.schema';
import { Model } from 'mongoose';
import { PacienteDto } from '../dto/paciente.dto';

@Injectable()
export class UpdatePacienteRepository {
  constructor(
    @InjectModel(Paciente.name) private pacienteModel: Model<PacienteDocument>,
  ) {}

  async execute(id: string, paciente: PacienteDto): Promise<PacienteDto> {
    const updatedPaciente = await this.pacienteModel
      .findByIdAndUpdate(id, paciente)
      .exec();
    if (!updatedPaciente) {
      throw new NotFoundException('Paciente nao encontrado');
    }
    return updatedPaciente.toObject();
  }
}
