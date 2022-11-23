import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAll() {
    return this.carsService.finAll();
  }
  @Get(':id')
  getCarByid(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findCardByID(id);
  }

  @Post()
  //esto deberia de esta aunm alto  nivel para validar todos los dtoc
  //con esto nos referimos al principio dry
  // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id: id,
    };
  }
}
