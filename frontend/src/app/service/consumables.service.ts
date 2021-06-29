/*
* You are not expected to modify this file!
*/
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsumablesService {
  getDrinksMenu(): Observable<string[]> {
    return of(
      ['water', 'coke', 'juice']
    );
  }

  getFoodMenu(): Observable<string[]> {
    return of(
      ['sandwich', 'burger', 'steak']
    );
  }

  getRestaurantCities(): Observable<string[]> {
    return of(
      ['London', 'Madrid', 'Berlin', 'Rome']
    );
  }
}
