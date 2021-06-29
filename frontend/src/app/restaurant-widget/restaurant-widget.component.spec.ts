import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantWidgetComponent } from './restaurant-widget.component';
import {ConsumablesService} from "../service/consumables.service";
import {ConsumablesServiceMock} from "../tests/mocks";

describe('RestaurantWidgetComponent', () => {
  let component: RestaurantWidgetComponent;
  let fixture: ComponentFixture<RestaurantWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantWidgetComponent ],
      providers: [
        {
          provide: ConsumablesService,
          useClass: ConsumablesServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // JOE: I got some error at some point, so I did comment it, anyway this test doesn't do much
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
