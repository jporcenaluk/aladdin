import { Component } from '@angular/core';
import { AddressService } from './address/address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AddressService]
})
export class AppComponent {
  title = 'app';
}
