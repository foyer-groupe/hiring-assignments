import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ConsumablesService} from "../service/consumables.service";

// JOE: I saw something a bit weird, if I uncomment app-restaurant-widget from the app.component.html and use 'npm run test'
// there was the following warning:
// ERROR: 'NG0304: 'app-restaurant-widget' is not a known element:
// 1. If 'app-restaurant-widget' is an Angular component, then verify that it is part of this module.
// I figured it is a test related warning but I don't know how to fix it.

@Component({
  selector: 'app-restaurant-widget',
  templateUrl: './restaurant-widget.component.html',
  styleUrls: ['./restaurant-widget.component.scss'],
  // JOE: I removed it, as the cities weren't displayed properly
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantWidgetComponent implements OnInit, AfterViewInit {

  constructor(private readonly _consumablesService: ConsumablesService) { }
  cities: any;
  meals: any;

  // JOE: I used the async/await here to delay the initialization of the component
  async ngOnInit(): Promise<void> {
    this.meals = await this._consumablesService.getFoodMenu().toPromise();
  }

  // JOE: I didn't put it in the ngOnInit as I didn't want the cities call to delay the view longer.
  // (I think we can already display the view once we have the food)
  ngAfterViewInit(): void {
    this._consumablesService.getRestaurantCities().subscribe(_ => this.cities = _);
  }

  // JOE: We need to display the drinks first, followed by the food, I used async and await to call both APIs simultaneously
  async getMenu(): Promise<string[]> {
    var drinks = await this._consumablesService.getDrinksMenu().toPromise();
    var foods = await this._consumablesService.getFoodMenu().toPromise();
    return drinks.concat(foods);
  }
}
