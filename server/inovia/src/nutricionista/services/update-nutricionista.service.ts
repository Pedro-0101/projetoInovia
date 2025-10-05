import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateNutricionistaRepository } from '../repositories/update-nutricionista.repository';
import { NutricionistaDto } from '../dto/nutricionista.dto';

@Injectable()
export class UpdateNutricionistaService {
  constructor(
    private readonly updateNutricionistaReopsitory: UpdateNutricionistaRepository,
  ) {}

  async execute(
    id: string,
    nutricionista: NutricionistaDto,
  ): Promise<NutricionistaDto> {
    const existeNutricionista =
      await this.updateNutricionistaReopsitory.findById(id);

    if (!existeNutricionista) {
      throw new NotFoundException('Nutricionista nao encontrado');
    }

    const updatedNutricionista =
      await this.updateNutricionistaReopsitory.execute(id, nutricionista);
    return updatedNutricionista;
  }
}
