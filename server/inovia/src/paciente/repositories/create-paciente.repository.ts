import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Paciente, PacienteDocument } from '../Schema/paciente.schema';
import { Model } from 'mongoose';
import { PacienteDto } from '../dto/paciente.dto';

@Injectable()
export class CreatePacienterepository {
  constructor(
    @InjectModel(Paciente.name) private pacienteModel: Model<PacienteDocument>,
  ) {}

  async execute(paciente: PacienteDto): Promise<PacienteDto> {
    const createdPaciente = new this.pacienteModel(paciente);
    await createdPaciente.save();
    return createdPaciente.toObject();
  }
}

