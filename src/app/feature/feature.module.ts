import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'menu', component: MenuComponent}
]
@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeatureModule { }
