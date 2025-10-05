import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nutricionista, NutricionistaDocument } from '../Schema/nutricionista.schema';
import { NutricionistaDto } from '../dto/nutricionista.dto';

@Injectable()
export class UpdateNutricionistaRepository {
  constructor(
    @InjectModel(Nutricionista.name)
    private nutricionistaModel: Model<NutricionistaDocument>,
  ) {}

  async findById(id: string): Promise<NutricionistaDto | null> {
    const nutricionista = await this.nutricionistaModel.findById(id).exec();
    return nutricionista ? nutricionista.toObject() : null;
  }

  async execute(
    id: string,
    nutricionista: NutricionistaDto,
  ): Promise<NutricionistaDto> {
    const updatedNutricionista = await this.nutricionistaModel
      .findByIdAndUpdate(id, nutricionista, { new: true })
      .exec();

    if (!updatedNutricionista) {
      throw new Error('Nutricionista nao encontrado');
    }

    return updatedNutricionista.toObject();
  }
}
