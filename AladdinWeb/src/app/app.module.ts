import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { SelectionComponent } from './selection/selection.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    SelectionComponent,
    UserComponent,
    NavigationComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGT0t1EGVydna4rkOBAv0UtjtRLLj3nQ4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
