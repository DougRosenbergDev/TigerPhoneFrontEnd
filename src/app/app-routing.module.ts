import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { PlansComponent } from './plans/plans.component';
import { IndexComponent } from './users/index/index.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'Users', component: IndexComponent },
  { path: 'Devices', component: DevicesComponent },
  { path: 'Plans', component: PlansComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
