import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema()
export class Nutricionista extends Document {
  @Prop({ required: true })
  nome: string;
}

export const NutricionistaSchema = SchemaFactory.createForClass(Nutricionista);
export type NutricionistaDocument = HydratedDocument<Nutricionista>;
