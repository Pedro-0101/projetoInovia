import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateNutricionistaService } from './services/create-nutricionista.service';
import type { NutricionistaDto } from './dto/nutricionista.dto';
import { UpdateNutricionistaService } from './services/update-nutricionista.service';

@Controller('nutricionista')
export class NutricionistaController {
  constructor(
    private readonly createNutricionistaService: CreateNutricionistaService,
    private readonly updateNutricionistaService: UpdateNutricionistaService,
  ) {}

  @Post()
  async create(
    @Body() nutricionista: NutricionistaDto,
  ): Promise<NutricionistaDto> {
    return await this.createNutricionistaService.execute(nutricionista);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() nutricionista: NutricionistaDto,
  ): Promise<NutricionistaDto> {
    return this.updateNutricionistaService.execute(id, nutricionista);
  }
}
