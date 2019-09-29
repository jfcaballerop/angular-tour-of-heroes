import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeroSearchComponent } from '../hero-search/hero-search.component';



@NgModule({
  declarations: [
    HeroListComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeroListComponent,
    DashboardComponent,
    HeroSearchComponent
  ]
})
export class DashboardModuleModule { }
