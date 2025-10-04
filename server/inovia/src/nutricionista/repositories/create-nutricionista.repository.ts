import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Nutricionista, NutricionistaDocument } from "../Schema/nutricionista.schema";
import { Model } from "mongoose";
import { INutricionistaEntity } from "../interfaces/INutricionistaEntity";

@Injectable()
export class CreateNutricionistaRepository {
  constructor(
    @InjectModel(Nutricionista.name) private nutricionistaModel: Model<NutricionistaDocument>
  ){}

  async execute(nutricionista: INutricionistaEntity): Promise<INutricionistaEntity> {
    const createdNutricionista = new this.nutricionistaModel(nutricionista);
    await createdNutricionista.save()
    return createdNutricionista.toObject();
  }
}