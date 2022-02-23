import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './demos/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Demo0Component } from './demos/demo0/demo0.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo0Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
