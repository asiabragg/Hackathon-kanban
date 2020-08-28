import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KabanHomeComponent } from './kaban-home/kaban-home.component';
import {SharedModule} from './shared/shared.module';
import { KabanLandingComponent } from './kaban-landing/kaban-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    KabanHomeComponent,
    KabanLandingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
