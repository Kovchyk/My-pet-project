import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetchData.service';
import { ActivatedRoute } from "@angular/router";
import { CityDeteilsResolver } from "../services/city-details-resolver";
import { Router } from '@angular/router';
import { LocalStorageService } from "../services/local-storage.service";

@Component({
  moduleId: module.id,
  selector: 'city-details',
  templateUrl: 'city-details.component.html',
  styleUrls: ['city-details.component.css'],
})

export class CityDetailsComponent implements OnInit{ 
  days: any;
  id: number;
  cityName: string;
  cityDetails: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private localStorageService: LocalStorageService) { }

    ngOnInit() {
      this.activatedRoute.data.subscribe(data => {
          this.cityDetails = data['cityDetails'];
          this.id = this.cityDetails.city.id;
          let storedCityInfo = this.localStorageService.getDataFromLocalStorage(this.id + '');

          if (storedCityInfo) {
            this.days = storedCityInfo.list;
            this.cityName = storedCityInfo.city.name;
          } else {
            this.localStorageService.saveDataToLocalStorage(this.id + '', this.cityDetails);
            this.days = this.cityDetails.list;
            this.cityName = this.cityDetails.city.name;
          }
          
      });

    }

    backToCities() {
      this.router.navigate(['/']);
    }
}