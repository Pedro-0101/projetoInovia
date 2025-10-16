import { Injectable } from '@nestjs/common';
import { CreateNutricionistaRepository } from '../repositories/create-nutricionista.repository';
import { NutricionistaDto } from '../dto/nutricionista.dto';

@Injectable()
export class CreateNutricionistaService {
  constructor(
    private readonly createNutricionistaRepository: CreateNutricionistaRepository,
  ) {}

  async execute(nutricionista: NutricionistaDto): Promise<NutricionistaDto> {
    const newNutricionista =
      await this.createNutricionistaRepository.execute(nutricionista);
    return newNutricionista;
  }
}
