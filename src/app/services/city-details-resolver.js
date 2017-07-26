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
var fetchData_service_1 = require("./fetchData.service");
var CityDeteilsResolver = (function () {
    function CityDeteilsResolver(fetchDataService) {
        this.fetchDataService = fetchDataService;
    }
    CityDeteilsResolver.prototype.resolve = function (route, state) {
        return this.fetchDataService.getFiveDayForecast(route.params['id']);
    };
    return CityDeteilsResolver;
}());
CityDeteilsResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [fetchData_service_1.FetchDataService])
], CityDeteilsResolver);
exports.CityDeteilsResolver = CityDeteilsResolver;
//# sourceMappingURL=city-details-resolver.js.map