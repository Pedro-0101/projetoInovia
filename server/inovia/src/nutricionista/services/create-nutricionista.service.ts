import { Injectable } from "@nestjs/common";
import { CreateNutricionistaRepository } from "../repositories/create-nutricionista.repository";
import { INutricionistaEntity } from "../interfaces/INutricionistaEntity";

@Injectable()
export class CreateNutricionistaService {
  constructor(
    private readonly createNutricionistaRepository : CreateNutricionistaRepository
  ){}

  async execute(nutricionista: INutricionistaEntity): Promise<INutricionistaEntity> {
    let newNutricionista = await this.createNutricionistaRepository.execute(nutricionista);
    return newNutricionista;
  }
}