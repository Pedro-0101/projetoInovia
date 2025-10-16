import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ReadNutricionistaRepository } from '../repositories/read-nutricionista.repository';
import { NutricionistaDto } from '../dto/nutricionista.dto';

@Injectable()
export class ReadNutricionistaService {
  constructor(
    private readonly readNutricionistaRepository: ReadNutricionistaRepository,
  ) {}

  async execute(id?: string): Promise<NutricionistaDto[]> {
    const formattedId =
      typeof id === 'string' &&
      id.trim().length > 0 &&
      Types.ObjectId.isValid(id)
        ? id
        : undefined;

    return this.readNutricionistaRepository.execute(formattedId);
  }
}
