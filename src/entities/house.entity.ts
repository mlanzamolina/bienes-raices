import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Decimal } from 'decimal.js';
@Entity({ name: 'Houses' })
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  dateListed: Date;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salePrice: Decimal;

  @Column()
  thumbnailUrl: string;

  @Column()
  pictureUrl: string;

  @Column()
  location: string;

  @Column()
  sqft: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parking: number;

  @Column()
  yearBuilt: number;
}
