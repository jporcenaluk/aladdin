import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IProfileResponse {
  results: any;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  address: HTMLInputElement;

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
  }

  
  public getAddress() {
      this.address.value = "Hey";
  }



}
