import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseService } from './house/house.service';
import { House } from './entities/house.entity';
import { HouseSchema } from './schemas/house.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dev2msps:9isVcMto7Trsl1cG@cluster0.jbsv7yf.mongodb.net/?retryWrites=true&w=majority',
      {
        serverApi: {
          version: '1', // Specify Stable API version
          strict: true,
          deprecationErrors: true,
        },
      }
    ),
    MongooseModule.forFeature([{ name: House.name, schema: HouseSchema }]), // Agrega esta línea
  ],
  controllers: [AppController],
  providers: [AppService, HouseService],
})
export class AppModule {}