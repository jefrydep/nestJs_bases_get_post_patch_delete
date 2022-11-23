import { Injectable, NotFoundException } from '@nestjs/common';
import Car from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { CarsModule } from './cars.module';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      states: 'new',
    },
    {
      id: uuid(),
      brand: 'Run',
      states: 'new',
    },
    {
      id: uuid(),
      brand: 'Chebrolet',
      states: 'new',
    },
    {
      id: uuid(),
      brand: 'Susuki',
      states: 'new',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      states: 'new',
    },
  ];
  finAll() {
    return this.cars;
  }
  findCardByID(id: string) {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException(`card with id ${id} not foundd`);
    return car;
  }
  createCar(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }
}
