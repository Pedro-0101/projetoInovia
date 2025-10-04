import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

@Schema()
export class Paciente extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  telefone: string;

  @Prop({ required: true })
  dn: Date;

  @Prop({ required: true })
  biotipo: string;

  @Prop({ required: true })
  cpf: string;
}

export const PacienteSchema = SchemaFactory.createForClass(Paciente);
export type PacienteDocument = HydratedDocument<Paciente>;
