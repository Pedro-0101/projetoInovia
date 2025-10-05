import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterConsultaDto {
  @ApiPropertyOptional()
  nutricionista?: string;

  @ApiPropertyOptional()
  paciente?: string;

  @ApiPropertyOptional()
  status?: string;

  @ApiPropertyOptional({ type: String, format: 'date-time' })
  inicioDe?: Date;

  @ApiPropertyOptional({ type: String, format: 'date-time' })
  inicioAte?: Date;

  @ApiPropertyOptional({ type: String, format: 'date-time' })
  terminoDe?: Date;

  @ApiPropertyOptional({ type: String, format: 'date-time' })
  terminoAte?: Date;
}
