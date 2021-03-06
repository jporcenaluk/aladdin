import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { SelectionComponent } from './selection/selection.component';
import { UserComponent } from './user/user.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AdvertiseComponent } from './advertise/advertise.component';

const routes: Routes = [
  {
    path: '', component: UserComponent
  },
  {
    path: 'selection', component: SelectionComponent
  },
  {
    path: 'address', component: AddressComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'thanks', component: ThanksComponent
  },
  {
    path: 'advertise', component: AdvertiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
