import { TestBed, async } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';

@Component({ selector: 'app-hotels-listing', template: '' })
class HotelsListingComponent {
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HotelsListingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
