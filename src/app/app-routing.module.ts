import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

const routes: Routes = [
  {path: 'Heroes', component: HeroesComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
  {path: 'Details/:id', component: HeroesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
