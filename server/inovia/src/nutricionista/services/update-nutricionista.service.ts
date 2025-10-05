import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateNutricionistaRepository } from '../repositories/update-nutricionista.repository';
import { NutricionistaDto } from '../dto/nutricionista.dto';
import { ReadNutricionistaRepository } from '../repositories/read-nutricionista.repository';

@Injectable()
export class UpdateNutricionistaService {
  constructor(
    private readonly updateNutricionistaReopsitory: UpdateNutricionistaRepository,
    private readonly readNutricionistaRepository: ReadNutricionistaRepository,
  ) {}

  async execute(
    id: string,
    nutricionista: NutricionistaDto,
  ): Promise<NutricionistaDto> {
    const existeNutricionista =
      await this.readNutricionistaRepository.findById(id);

    if (!existeNutricionista) {
      throw new NotFoundException('Nutricionista nao encontrado');
    }

    const updatedNutricionista =
      await this.updateNutricionistaReopsitory.execute(id, nutricionista);
    return updatedNutricionista;
  }
}
