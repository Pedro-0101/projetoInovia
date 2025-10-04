import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Paciente, PacienteDocument } from '../Schema/paciente.schema';
import { Model } from 'mongoose';
import { IPacienteEntity } from '../interfaces/IPacienteEntity';

@Injectable()
export class CreatePacienterepository {
  constructor(
    @InjectModel(Paciente.name) private pacienteModel: Model<PacienteDocument>,
  ) {}

  async execute(paciente: IPacienteEntity): Promise<IPacienteEntity> {
    const createdPaciente = new this.pacienteModel(paciente);
    await createdPaciente.save();
    return createdPaciente.toObject();
  }
}
