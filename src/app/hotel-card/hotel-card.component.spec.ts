import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { HotelListService } from '../services/hotel-list.service';
import { HotelCardComponent } from './hotel-card.component';
import { HotelsListingComponent } from './../hotels-listing/hotels-listing.component';

const item = {
  name: 'fake_name',
  image: 'https://back-verychic.orchestra-platform.com/admin/TS/fckUserFiles/Image/HER_grecotel_creta_palace/cretapalace_39.jpg',
  price: 1,
  destinationName: 'fake_destination',
  shortDesc: 'fake_shortDesc',
  discount: 2,
  pricePreLabel: 'fake_pricePre',
  pricePostLabel: 'fake_pricePost',
};

@Component({ selector: 'app-hotels-listing', template: '' })
class HotelsListingStubComponent {
  @Input() item;
  @Input() i;
}

class MyHotelListServiceStub {
  getHotels() {
    return item;
  }
}

describe('HotelCardComponent', () => {
  let component: HotelCardComponent;
  let fixture: ComponentFixture<HotelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotelCardComponent,
        HotelsListingStubComponent,
        HotelsListingComponent
      ],
      providers: [
        { provide: HotelListService, useClass: MyHotelListServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.item = item;
    component.i = 1;

    component.ngOnInit();

    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contain string fake_destination', () => {
    const elt = fixture.nativeElement.querySelector('h3.hotel-card__item-location');
    component.item = item;
    component.i = 1;

    component.ngOnInit();

    fixture.detectChanges();
    expect(elt.innerText).toContain('FAKE_DESTINATION');
  });

  it('should contain the fake_name fo the location', () => {
    const elt = fixture.nativeElement.querySelector('p.hotel-card__item-title');
    component.item = item;
    component.i = 1;

    component.ngOnInit();

    fixture.detectChanges();
    expect(elt.innerText).toContain('fake_name');
  });

  it('should contain a number related to price', () => {
    const elt = fixture.nativeElement.querySelector('span.hotel-card__item-price-number');
    component.item = item;
    component.i = 1;

    component.ngOnInit();

    fixture.detectChanges();

    expect(elt.innerText).toContain('1€');
  });

  it('should contain short description', () => {
    const elt = fixture.nativeElement.querySelector('p.hotel-card__item-description');
    component.item = item;
    component.i = 1;

    component.ngOnInit();

    fixture.detectChanges();
    expect(elt.innerText).toContain('fake_shortDesc');
  });
});
