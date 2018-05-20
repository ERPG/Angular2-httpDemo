import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { HotelCardComponent } from './hotel-card.component';
import { HotelsListingComponent } from './../hotels-listing/hotels-listing.component';

@Component({ selector: 'app-hotels-listing', template: '' })
class HotelsListingStubComponent {
  @Input() item;
  @Input() i;
}

const item = {
  name: 'fake_name',
  image: 'fake_image',
  price: 'fake_price',
  destinationName: 'fake_destination'
};

describe('HotelCardComponent', () => {
  let component: HotelCardComponent;
  let fixture: ComponentFixture<HotelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotelCardComponent,
        HotelsListingStubComponent,
        HotelsListingComponent
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

    fixture.detectChanges();
    console.log(component);
    console.log('< ========================== 3 ============================= >');
    expect(component).toBeTruthy();
  });

  // it('should contain an image', () => {
  //   component.item.image = item.image;
  //   component.i = 1;

  //   fixture.detectChanges();
  //   const elt = fixture.nativeElement.querySelectorAll('img.hotel-card__image-1');
  //   console.log(elt);
  //   console.log('< ========================== 2 ============================= >');
  //   expect(elt).toContain('fake_image');
  // });
});
