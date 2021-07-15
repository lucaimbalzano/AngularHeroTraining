import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'Heroes', component: HeroesComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'Dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
