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

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
  }

  public currentCount = 0;
  public data = "";
  
  public incrementCounter() {
      this.currentCount++;
  }



}
