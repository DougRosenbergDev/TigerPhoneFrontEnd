import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { PIndexComponent } from './plans/index/index.component';
import { IndexComponent } from './users/index/index.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'Users', component: IndexComponent },
  { path: 'Devices', component: DevicesComponent },
  { path: 'Plans', component: PIndexComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
