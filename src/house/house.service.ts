import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House, HouseDocument } from '../schemas/house.schema';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name) private houseModel: Model<HouseDocument>,
  ) {}

  async create(houseData: House): Promise<House> {
    const house = new this.houseModel(houseData);
    await house.save();
    return house;
  }

  async findAll(): Promise<House[]> {
    return await this.houseModel.find().exec();
  }
}
