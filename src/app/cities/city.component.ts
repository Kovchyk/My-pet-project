import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
//import { CityListResolver } from "../services/city-list-resolver";

import { FetchDataService } from '../services/fetch-data.service';
import { CitiesListService } from "../services/cities-list.service";
import { LocalStorageService } from "../services/local-storage.service";

@Component({
  moduleId: module.id,
  selector: 'city',
  templateUrl: 'city.component.html',
  styleUrls: ['city.component.css']
})

export class CityComponent implements OnInit { 
  private citiesList: any;
  public citiesArray: any;
  private id: number;
  public date: any;
  private lists: any;
  //properties for ng-select
  options: Array<any> = [];
  myPlaceholderText: string = 'Select a city';
  mySelectValue: Array<string>; // Array of strings for multi select, string for single select.

  constructor(private fetchDataService: FetchDataService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router, 
              private citiesListService: CitiesListService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() { /*
    this.activatedRoute.data.subscribe(data => {
      this.citiesList = data['citiesList'];
      this.citiesList.map((val: any) => {
        this.options.push({value: val.id, label: val.name})
      });
    });*/
    this.date = this.localStorageService.getDataFromLocalStorage('lastDate');
    this.getDate();
    this.getCitiesArray();
    this.lists = this.citiesListService.citiesList;
    
    this.lists.map((val: any) => {
      this.options.push({value: val.id, label: val.name});
    });
    
  }

  addCity() {
    
    if (this.mySelectValue) {
      this.router.navigate(['/add', this.mySelectValue]);
      this.fetchDataService.addCity(+this.mySelectValue);
    }

  }

  getDate() {
    this.fetchDataService.getDate().subscribe(date => {
      this.date = date; 
    });
  }
  
  getCitiesArray() {
    this.fetchDataService.getCitiesArray().subscribe(weatherArray => {
      this.citiesArray = weatherArray;
    });
  }
  
  deleteItem(id:number) {
    this.fetchDataService.deleteItem(id);
  }

  //this method is used in city.component.html
  updateDataAndStartTimer() {
    this.fetchDataService.updateDataAndStartTimer(); 
  }

}