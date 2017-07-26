"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var angular2_select_1 = require("angular2-select");
var app_component_1 = require("./app.component");
var cities_component_1 = require("./cities/cities.component");
var city_details_component_1 = require("./city-details/city-details.component");
var firstCapitalLetter_pipe_1 = require("./pipes/firstCapitalLetter.pipe");
var round_pipe_1 = require("./pipes/round.pipe");
var date_pipe_1 = require("./pipes/date.pipe");
var city_details_resolver_1 = require("./services/city-details-resolver");
var city_list_resolver_1 = require("./services/city-list-resolver");
var fetchData_service_1 = require("./services/fetchData.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing, forms_1.FormsModule, angular2_select_1.SelectModule],
        declarations: [app_component_1.AppComponent, cities_component_1.CitiesComponent, city_details_component_1.CityDetailsComponent, firstCapitalLetter_pipe_1.FirstCapitalLetterPipe, round_pipe_1.RoundNumPipe, date_pipe_1.DatePipe],
        bootstrap: [app_component_1.AppComponent],
        providers: [fetchData_service_1.FetchDataService, city_details_resolver_1.CityDeteilsResolver, city_list_resolver_1.CityListResolver]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map