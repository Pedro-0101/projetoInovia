import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { CreateNutricionistaService } from './services/create-nutricionista.service';
import type { NutricionistaDto } from './dto/nutricionista.dto';
import { UpdateNutricionistaService } from './services/update-nutricionista.service';
import { ReadNutricionistaService } from './services/read-nutricionista.service';

@Controller('nutricionista')
export class NutricionistaController {
  constructor(
    private readonly createNutricionistaService: CreateNutricionistaService,
    private readonly updateNutricionistaService: UpdateNutricionistaService,
    private readonly readNutricionistaService: ReadNutricionistaService,
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

  @Get()
  @ApiQuery({ name: 'id', required: false, type: String })
  async get(@Query('id') id?: string | string[]): Promise<NutricionistaDto[]> {
    const rawId = Array.isArray(id) ? id[0] : id;
    const formattedId =
      typeof rawId === 'string' && rawId.trim().length > 0 ? rawId : undefined;

    return this.readNutricionistaService.execute(formattedId);
  }
}
