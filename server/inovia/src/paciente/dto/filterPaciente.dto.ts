import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterPacienteDto {
  @ApiPropertyOptional({ type: String })
  _id?: string;

  @ApiPropertyOptional({ type: String })
  nome?: string;

  @ApiPropertyOptional({ type: String })
  email?: string;

  @ApiPropertyOptional({ type: String })
  telefone?: string;

  @ApiPropertyOptional({ type: String, format: 'date-time' })
  dn?: string;

  @ApiPropertyOptional({ type: String })
  biotipo?: string;

  @ApiPropertyOptional({ type: String })
  cpf?: string;
}
