import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { SelectModule } from 'angular2-select';

import { AppComponent }  from './app.component';
import { CityComponent } from './cities/city.component';
import { CityDetailsComponent } from './city-details/city-details.component';

import { FirstCapitalLetterPipe } from "./pipes/firstCapitalLetter.pipe";
import { RoundNumPipe } from "./pipes/round.pipe";
import { DatePipe } from "./pipes/date.pipe";

import { CityDeteilsResolver } from "./services/city-details-resolver";
import { CityListResolver } from "./services/city-list-resolver";

import { FetchDataService } from './services/fetchData.service';
import { CityDetailsService } from "./services/city-details.service";

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule, SelectModule ],
  declarations: [ AppComponent, CityComponent, CityDetailsComponent, FirstCapitalLetterPipe, RoundNumPipe, DatePipe ],
  bootstrap:    [ AppComponent ],
  providers:    [ FetchDataService, CityDeteilsResolver, CityListResolver, CityDetailsService ]
})
export class AppModule { }