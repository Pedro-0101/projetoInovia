import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

@Schema()
export class Consulta extends Document {
  @Prop({ required: true })
  nutricionista: string;

  @Prop({ required: true })
  paciente: string;

  @Prop({ required: true })
  inicio: Date;

  @Prop({ required: true })
  termino: Date;

  @Prop({ required: true })
  status: string;
}

export const ConsultaSchema = SchemaFactory.createForClass(Consulta);
export type ConsultaDocument = HydratedDocument<Consulta>;
