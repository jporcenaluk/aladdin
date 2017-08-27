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

  public createProfile() {
    var user = {"user":{
      "username": "coolio",
      "email":"justinssssssss@aladin.com", 
      "password":"p@ssb1tch!"}
    };

    this.http.post<IProfileResponse>('https://morning-ridge-70177.herokuapp.com/api/users', user)
    .subscribe(data=> {
      // data is now an instance of type ItemsResponse, so you can do this:
      this.data = JSON.stringify(data.results);
    });
  }

}
