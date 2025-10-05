import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Nutricionista,
  NutricionistaDocument,
} from '../Schema/nutricionista.schema';
import { Model } from 'mongoose';
import { NutricionistaDto } from '../dto/nutricionista.dto';

@Injectable()
export class ReadNutricionistaRepository {
  constructor(
    @InjectModel(Nutricionista.name)
    private nutricionistaModel: Model<NutricionistaDocument>,
  ) {}

  async findById(id: string): Promise<NutricionistaDto | null> {
    const nutricionista = await this.nutricionistaModel.findById(id).exec();
    return nutricionista ? nutricionista.toObject() : null;
  }

  async execute(id?: string): Promise<NutricionistaDto[]> {
    const filter = id ? { _id: id } : {};
    const query = this.nutricionistaModel.find(filter);
    const nutricionistas = await query.sort({ nome: 1 }).exec();
    return nutricionistas.map((nutricionista) => nutricionista.toObject());
  }
}
