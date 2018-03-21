import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import {CountryService} from './service/country.service'
import {CountryComponent} from './country/country.component'

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
