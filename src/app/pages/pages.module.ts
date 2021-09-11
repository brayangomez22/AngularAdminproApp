import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphOneComponent,
    PagesComponent,
    NopagefoundComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraphOneComponent,
    PagesComponent,
    NopagefoundComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule],
})
export class PagesModule {}
