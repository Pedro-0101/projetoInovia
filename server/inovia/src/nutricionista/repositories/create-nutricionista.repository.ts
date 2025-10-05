import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Nutricionista, NutricionistaDocument } from "../Schema/nutricionista.schema";
import { Model } from "mongoose";
import { NutricionistaDto } from "../dto/nutricionista.dto";

@Injectable()
export class CreateNutricionistaRepository {
  constructor(
    @InjectModel(Nutricionista.name) private nutricionistaModel: Model<NutricionistaDocument>
  ){}

  async execute(nutricionista: NutricionistaDto): Promise<NutricionistaDto> {
    const createdNutricionista = new this.nutricionistaModel(nutricionista);
    await createdNutricionista.save()
    return createdNutricionista.toObject();
  }
}
