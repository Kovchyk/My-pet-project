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
var fetchData_service_1 = require("../services/fetchData.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var CityDetailsComponent = (function () {
    function CityDetailsComponent(fetchDataService, activatedRoute, router) {
        this.fetchDataService = fetchDataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    CityDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.cityDetails = data['cityDetails'];
            _this.id = _this.cityDetails.city.id;
            _this.addCity(_this.id);
            var storedCityInfo = localStorage.getItem(_this.id + '');
            if (storedCityInfo) {
                console.log("Cashe");
                var storedCityArray = JSON.parse(storedCityInfo);
                _this.days = storedCityArray.list;
                _this.cityName = storedCityArray.city.name;
            }
            else {
                console.log("GET");
                localStorage.setItem(_this.id + '', JSON.stringify(_this.cityDetails));
                _this.days = _this.cityDetails.list;
                _this.cityName = _this.cityDetails.city.name;
            }
        });
    };
    CityDetailsComponent.prototype.addCity = function (id) {
        return this.fetchDataService.addCity(id);
    };
    CityDetailsComponent.prototype.backToCities = function () {
        this.router.navigate(['/']);
    };
    return CityDetailsComponent;
}());
CityDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'city-details',
        templateUrl: 'city-details.component.html',
        styleUrls: ['city-details.component.css'],
    }),
    __metadata("design:paramtypes", [fetchData_service_1.FetchDataService,
        router_1.ActivatedRoute,
        router_2.Router])
], CityDetailsComponent);
exports.CityDetailsComponent = CityDetailsComponent;
//# sourceMappingURL=city-details.component.js.map