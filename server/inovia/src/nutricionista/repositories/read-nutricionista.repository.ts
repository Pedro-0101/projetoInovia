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
}
