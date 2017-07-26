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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Subject_1 = require("rxjs/Subject");
var Rx_1 = require("rxjs/Rx");
var FetchDataService = (function () {
    function FetchDataService(http) {
        this.http = http;
        this.cities = new BehaviorSubject_1.BehaviorSubject([]);
        this.date = new Subject_1.Subject();
        this.apiKey = 'e4a01aeef0993c451f22d98569c8e243';
        this.refreshItems();
    }
    FetchDataService.prototype.getDataFromServer = function (id) {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=' + id + '&units=metric&APPID=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    FetchDataService.prototype.getCitiesFromLocalStorage = function () {
        return JSON.parse(localStorage.getItem("storedCities"));
    };
    FetchDataService.prototype.saveCitiesInLocalStorage = function (array) {
        localStorage.setItem("storedCities", JSON.stringify(array));
    };
    FetchDataService.prototype.addCity = function (id) {
        var _this = this;
        if (id) {
            var citiesArray_1 = this.getCitiesFromLocalStorage();
            // if localStorage is empty declare an array
            if (citiesArray_1 === null) {
                citiesArray_1 = [];
            }
            if (!citiesArray_1.some(function (val) { return val.id == id; })) {
                this.getDataFromServer(id).subscribe(function (data) {
                    citiesArray_1.unshift(data);
                    _this.saveCitiesInLocalStorage(citiesArray_1);
                    _this.cities.next(JSON.parse(localStorage.getItem("storedCities")));
                });
            }
        }
    };
    FetchDataService.prototype.getCities = function () {
        return this.cities;
    };
    FetchDataService.prototype.getDate = function () {
        return this.date;
    };
    FetchDataService.prototype.deleteItem = function (id) {
        var _this = this;
        var array = this.getCitiesFromLocalStorage();
        // if localStorage is empty declare an array
        if (array === null) {
            array = [];
        }
        array.forEach(function (element, index) {
            if (element.id == id) {
                array.splice(index, 1);
                _this.saveCitiesInLocalStorage(array);
                _this.cities.next(JSON.parse(localStorage.getItem("storedCities")));
                //delete detail info from Local Storage
                localStorage.removeItem(id + '');
            }
        });
    };
    FetchDataService.prototype.refreshItems = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 600000);
        // if timer has already run than stop it before running it again
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = timer.subscribe(function (x) {
            _this.updateLastRefreshingDate();
            _this.getNewDataFromServer();
        });
    };
    FetchDataService.prototype.getNewDataFromServer = function () {
        var _this = this;
        var array = this.getCitiesFromLocalStorage();
        // if localStorage is empty declare an array
        if (array === null) {
            array = [];
        }
        var ids = "";
        if (array.length) {
            // Get ids as a string to pass it to a request
            var ids_1 = array.map(function (el) { return el.id; }).join(',');
            array.forEach(function (element) {
                _this.updateCityDetails(element.id);
            });
            this.updateLastRefreshingDate();
            var groupAnswer = this.http.get('http://api.openweathermap.org/data/2.5/group?id=' + ids_1 + '&units=metric&APPID=' + this.apiKey).map(function (res) { return res.json(); });
            groupAnswer.subscribe(function (array) {
                _this.saveCitiesInLocalStorage(array.list);
                _this.cities.next(JSON.parse(localStorage.getItem("storedCities")));
            });
        }
        console.log("Up");
    };
    FetchDataService.prototype.getFiveDayForecast = function (id) {
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=' + id + '&cnt=5&units=metric&APPID=' + this.apiKey).map(function (res) { return res.json(); });
    };
    FetchDataService.prototype.updateCityDetails = function (id) {
        var cityDetails = this.getFiveDayForecast(id);
        cityDetails.subscribe(function (details) {
            localStorage.setItem(details.city.id, JSON.stringify(details));
        });
    };
    FetchDataService.prototype.updateLastRefreshingDate = function () {
        var date = new Date().getTime();
        localStorage.setItem('lastDate', JSON.stringify(date));
        var updatedDate = localStorage.getItem('lastDate');
        this.date.next(updatedDate);
    };
    return FetchDataService;
}());
FetchDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FetchDataService);
exports.FetchDataService = FetchDataService;
//# sourceMappingURL=fetchData.service.js.map