"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
//import { CityListResolver } from "../services/city-list-resolver";
var fetchData_service_1 = require("../services/fetchData.service");
var cities_list_service_1 = require("../services/cities-list.service");
var CitiesComponent = (function () {
    function CitiesComponent(fetchDataService, activatedRoute, router, citiesListService) {
        this.fetchDataService = fetchDataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.citiesListService = citiesListService;
        this.options = [];
        this.myPlaceholderText = 'Select a city';
    }
    CitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.date = localStorage.getItem('lastDate');
        this.cities = this.fetchDataService.cities.getValue();
        this.getDate();
        this.getCities();
        this.lists = this.citiesListService.citiesList;
        this.lists.map(function (val) {
            _this.options.push({ value: val.id, label: val.name });
            console.log(_this.options);
        });
    };
    CitiesComponent.prototype.goToDetails = function () {
        if (this.mySelectValue) {
            this.router.navigate(['/add', this.mySelectValue]);
            console.log(this.mySelectValue);
        }
    };
    CitiesComponent.prototype.getDate = function () {
        var _this = this;
        this.fetchDataService.getDate().subscribe(function (date) {
            _this.date = date;
        });
    };
    CitiesComponent.prototype.getCities = function () {
        var _this = this;
        this.fetchDataService.getCities().subscribe(function (cities) {
            _this.cities = cities;
        });
    };
    CitiesComponent.prototype.deleteItem = function (id) {
        this.fetchDataService.deleteItem(id);
    };
    CitiesComponent.prototype.refreshAllbyButton = function () {
        this.fetchDataService.getNewDataFromServer();
    };
    return CitiesComponent;
}());
CitiesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cities',
        templateUrl: 'cities.component.html',
        styleUrls: ['cities.component.css']
    }),
    __metadata("design:paramtypes", [fetchData_service_1.FetchDataService, router_2.ActivatedRoute, router_1.Router, cities_list_service_1.CitiesListService])
], CitiesComponent);
exports.CitiesComponent = CitiesComponent;
//# sourceMappingURL=cities.component.js.map