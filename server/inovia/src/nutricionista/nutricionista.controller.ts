import { Body, Controller, Post } from '@nestjs/common';
import { CreateNutricionistaService } from './services/create-nutricionista.service';
import type { INutricionistaEntity } from './interfaces/INutricionistaEntity';

@Controller('nutricionista')
export class NutricionistaController {
  constructor(
    private readonly createNutricionistaService : CreateNutricionistaService
  ){}

  @Post()
  async create(@Body() nutricionista: INutricionistaEntity): Promise<INutricionistaEntity> {
    return await this.createNutricionistaService.execute(nutricionista)
  }
}
