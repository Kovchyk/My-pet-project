import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
//import { CityListResolver } from "../services/city-list-resolver";

import { FetchDataService } from '../services/fetchData.service';
import { CitiesListService } from "../services/cities-list.service";

@Component({
  moduleId: module.id,
  selector: 'cities',
  templateUrl: 'cities.component.html',
  styleUrls: ['cities.component.css']
})

export class CitiesComponent implements OnInit { 
  private citiesList: any;
  public cities: any;
  private id: number;
  public date: any;
  private lists: any;
  options: Array<any> = [];
  myPlaceholderText: string = 'Select a city';
  mySelectValue: Array<string>; // Array of strings for multi select, string for single select.

  constructor(private fetchDataService: FetchDataService, private activatedRoute: ActivatedRoute, private router: Router, private citiesListService: CitiesListService) { }

  ngOnInit() { /*
    this.activatedRoute.data.subscribe(data => {
      this.citiesList = data['citiesList'];
      this.citiesList.map((val: any) => {
        this.options.push({value: val.id, label: val.name})
      });
    });*/

    this.date = localStorage.getItem('lastDate');
    this.cities = this.fetchDataService.cities.getValue();
    this.getDate();
    this.getCities();
    this.lists = this.citiesListService.citiesList;
    
    this.lists.map((val: any) => {
      this.options.push({value: val.id, label: val.name});
    });
    
  }

  goToDetails() {
    
    if (this.mySelectValue) {
      this.router.navigate(['/add', this.mySelectValue]);
    }

  }

  getDate() {
    this.fetchDataService.getDate().subscribe(date => {
      this.date = date; 
    });
  }
  
  getCities() {
    this.fetchDataService.getCities().subscribe(cities => {
      this.cities = cities;
    });

  }
  
  deleteItem(id:number) {
    this.fetchDataService.deleteItem(id);
  }

  refreshAllbyButton() {
    this.fetchDataService.getNewDataFromServer(); 
  }

}