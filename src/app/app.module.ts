import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { SchoolComponent } from './school/school.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FeatureModule } from './feature/feature.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'office', component: OfficeComponent},
  {path: 'school', component: SchoolComponent},
  {path: 'dashboard', loadChildren: 'C:/BPER/RoutingExample/src/app/feature/feature.module#FeatureModule'},
  {path: '**', component: PageNotFoundComponentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfficeComponent,
    SchoolComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
