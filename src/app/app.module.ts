import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// services
import { HotelListService } from './services/hotel-list.service';

// Components
import { AppComponent } from './app.component';
import { HotelsListingComponent } from './hotels-listing/hotels-listing.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListingComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HotelListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
