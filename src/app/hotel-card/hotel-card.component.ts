import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
  @Input() item;
  @Input() i;
  public image: string;
  public destinationName: string;
  public name: string;
  public shortDesc: string;
  public discount: number;
  public pricePreLabel: string;
  public price: number;
  public pricePostLabel: string;

  constructor() { }

  ngOnInit() {
    this.image = this.item.image;
    this.destinationName = this.item.destinationName;
    this.name = this.item.name;
    this.shortDesc = this.item.shortDesc;
    this.discount = this.item.discount;
    this.pricePreLabel = this.item.pricePreLabel;
    this.price = this.item.price;
    this.pricePostLabel = this.item.pricePostLabel;
  }

}
