import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { SelectionComponent } from './selection/selection.component';
import { UserComponent } from './user/user.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
