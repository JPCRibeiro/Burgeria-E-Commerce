import { Injectable } from '@angular/core';
import { Food } from "../../shared/models/Food";
import { foods } from '../../../Data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }

  getFoodByNameId(nameId: String): Food {
    return this.getAll().find(food => food.nameId == nameId) ?? new Food();
  }

  getAll(): Food[] {
    return foods;
  }
}