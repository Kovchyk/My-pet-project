"use strict";
var router_1 = require("@angular/router");
var city_details_component_1 = require("./city-details/city-details.component");
var cities_component_1 = require("./cities/cities.component");
var city_details_resolver_1 = require("./services/city-details-resolver");
var AppRoutes = [
    {
        path: '',
        component: cities_component_1.CitiesComponent,
    },
    {
        path: 'city/:id',
        component: city_details_component_1.CityDetailsComponent,
        resolve: {
            cityDetails: city_details_resolver_1.CityDeteilsResolver
        }
    },
    {
        path: 'add/:id',
        redirectTo: '/city/:id', pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/', pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routing.js.map