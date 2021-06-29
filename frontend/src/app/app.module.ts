import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationWidgetComponent } from './pagination-widget/pagination-widget.component';
import { RestaurantWidgetComponent } from './restaurant-widget/restaurant-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationWidgetComponent,
    RestaurantWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
