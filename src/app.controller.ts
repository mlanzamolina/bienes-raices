import { Body, Controller, Get, Post } from '@nestjs/common';
import { HouseService } from './house/house.service'; 
import { House } from './entities/house.entity';


@Controller()
export class AppController {
  constructor(private readonly houseService: HouseService) {}
  @Get('/bienes-raices')
  async getHouses(): Promise<House[]> {
    return this.houseService.findAll();
  }
  @Post('/bienes-raices')
  async createHouse(@Body() house: House): Promise<House> {
    return this.houseService.create(house);
  }
}
