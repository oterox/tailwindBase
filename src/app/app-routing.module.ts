import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo0Component } from './demos/demo0/demo0.component';
import { HomeComponent } from './demos/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demo0', component: Demo0Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
