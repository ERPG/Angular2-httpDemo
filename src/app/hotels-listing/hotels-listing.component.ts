import { Component, OnInit } from '@angular/core';
import { HotelListService } from './../services/hotel-list.service';

@Component({
  selector: 'app-hotels-listing',
  templateUrl: './hotels-listing.component.html',
  styleUrls: ['./hotels-listing.component.css']
})
export class HotelsListingComponent implements OnInit {
  public results: any;

  constructor(private hotelListService: HotelListService) { }

  ngOnInit() {
    this.listHotels();
  }

  listHotels() {
    this.hotelListService
      .getHotels('http://api.verychic.com/verychic-endpoints/v1/products.json?language=fr&currency=EUR&de tailed=false&publishingStatus=nonexpired&size=3',
      (results) => {
        console.log(results.content);
        this.results = results.content;
      }, (error) => {
        console.log(error);
      });
  }
}
