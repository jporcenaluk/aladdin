import { Injectable } from '@angular/core';

@Injectable()
export class AddressService {

  constructor() { }
  data = "";

  getData(): string {
    this.data = "What";
    return this.data;
  }
}
