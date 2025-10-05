import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Nutricionista,
  NutricionistaDocument,
} from '../Schema/nutricionista.schema';
import { NutricionistaDto } from '../dto/nutricionista.dto';

@Injectable()
export class UpdateNutricionistaRepository {
  constructor(
    @InjectModel(Nutricionista.name)
    private nutricionistaModel: Model<NutricionistaDocument>,
  ) {}

  async execute(
    id: string,
    nutricionista: NutricionistaDto,
  ): Promise<NutricionistaDto> {
    const updatedNutricionista = await this.nutricionistaModel
      .findByIdAndUpdate(id, nutricionista, { new: true })
      .exec();

    if (!updatedNutricionista) {
      throw new NotFoundException('Nutricionista nao encontrada');
    }

    return updatedNutricionista.toObject();
  }
}
