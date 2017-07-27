import { Component, Input } from '@angular/core';
import { CityComponent } from './cities/city.component';
import { FetchDataService } from './services/fetchData.service';
import { OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CityDetailsService } from "./services/city-details.service";
import { CitiesListService } from "./services/cities-list.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ FetchDataService, CitiesListService ]
})
export class AppComponent implements OnInit {
 
  
  constructor(private fetchDataService: FetchDataService, private citiesListService: CitiesListService) {}

  ngOnInit() {

  }

}
