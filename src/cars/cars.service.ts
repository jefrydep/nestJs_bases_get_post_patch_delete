import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      states: 'new',
    },
    {
      id: 2,
      brand: 'Run',
      states: 'new',
    },
    {
      id: 3,
      brand: 'Chebrolet',
      states: 'new',
    },
    {
      id: 4,
      brand: 'Susuki',
      states: 'new',
    },
    {
      id: 5,
      brand: 'Toyota',
      states: 'new',
    },
  ];
  finAll() {
    return this.cars;
  }
  findCardByID(id: number) {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException(`card with id ${id} not foundd`);
    return car;
  }
}
