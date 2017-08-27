import { Component, OnInit } from '@angular/core';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private addressService: AddressService) { 

  }

  ngOnInit() {
  }

  public currentCount = 0;
  public data = {};
  
  public incrementCounter() {
      this.currentCount++;
  }

  public getDataFromService() {
    this.data = this.addressService.getData();
  }

}
