import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { HotelListService } from './../services/hotel-list.service';
import { HotelsListingComponent } from './hotels-listing.component';

@Component({ selector: 'app-hotel-card', template: '' })
class HotelCardStubComponent {
  @Input() item;
  @Input() i;
}

class MyHotelListServiceStub {
  getHotels = jasmine.createSpy('getHotels').and.returnValue({});
}

describe('HotelsListingComponent', () => {
  let component: HotelsListingComponent;
  let fixture: ComponentFixture<HotelsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotelsListingComponent,
        HotelCardStubComponent
      ],
      providers: [
        { provide: HotelListService, useClass: MyHotelListServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // console.log(component.listHotels);
    // console.log('< ======================= 2 ======================== >');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  // it('should return an Array of requests', () => {
  //   expect(component).toBeTruthy();
  // });
});
