import { Body, Controller, Post } from '@nestjs/common';
import { CreateNutricionistaService } from './services/create-nutricionista.service';
import type { NutricionistaDto } from './dto/nutricionista.dto';

@Controller('nutricionista')
export class NutricionistaController {
  constructor(
    private readonly createNutricionistaService : CreateNutricionistaService
  ){}

  @Post()
  async create(@Body() nutricionista: NutricionistaDto): Promise<NutricionistaDto> {
    return await this.createNutricionistaService.execute(nutricionista)
  }
}

