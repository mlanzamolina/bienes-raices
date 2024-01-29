import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Decimal from 'decimal.js';
import { Document } from 'mongoose';

export type HouseDocument = House & Document;

@Schema()
export class House {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true, type: Date })
  dateListed: Date;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: Number })
  salePrice: Decimal;

  @Prop({ required: true })
  thumbnailUrl: string;

  @Prop({ required: true })
  pictureUrl: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, type: Number })
  sqft: number;

  @Prop({ required: true, type: Number })
  bedrooms: number;

  @Prop({ required: true, type: Number })
  bathrooms: number;

  @Prop({ required: true, type: Number })
  parking: number;

  @Prop({ required: true, type: Number })
  yearBuilt: number;
}

export const HouseSchema = SchemaFactory.createForClass(House);