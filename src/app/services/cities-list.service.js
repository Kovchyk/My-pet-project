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
var CitiesListService = (function () {
    function CitiesListService(http) {
        this.http = http;
        this.citiesList = [
            {
                "id": 384848,
                "name": "Qarah Gawl al ‘Ulyā",
                "country": "IQ",
                "coord": {
                    "lon": 45.6325,
                    "lat": 35.353889
                }
            },
            {
                "id": 569143,
                "name": "Cherkizovo",
                "country": "RU",
                "coord": {
                    "lon": 37.728889,
                    "lat": 55.800835
                }
            },
            {
                "id": 713514,
                "name": "Alupka",
                "country": "UA",
                "coord": {
                    "lon": 34.049999,
                    "lat": 44.416668
                }
            },
            {
                "id": 2878044,
                "name": "Lichtenrade",
                "country": "DE",
                "coord": {
                    "lon": 13.40637,
                    "lat": 52.398441
                }
            },
            {
                "id": 464176,
                "name": "Zavety Il’icha",
                "country": "RU",
                "coord": {
                    "lon": 37.849998,
                    "lat": 56.049999
                }
            },
            {
                "id": 295582,
                "name": "‘Azriqam",
                "country": "IL",
                "coord": {
                    "lon": 34.700001,
                    "lat": 31.75
                }
            },
            {
                "id": 1271231,
                "name": "Ghūra",
                "country": "IN",
                "coord": {
                    "lon": 79.883331,
                    "lat": 24.766666
                }
            },
            {
                "id": 690856,
                "name": "Tyuzler",
                "country": "UA",
                "coord": {
                    "lon": 34.083332,
                    "lat": 44.466667
                }
            },
            {
                "id": 464737,
                "name": "Zaponor’ye",
                "country": "RU",
                "coord": {
                    "lon": 38.861942,
                    "lat": 55.639999
                }
            },
            {
                "id": 707716,
                "name": "Il’ichëvka",
                "country": "UA",
                "coord": {
                    "lon": 34.383331,
                    "lat": 44.666668
                }
            },
            {
                "id": 697959,
                "name": "Partyzans’ke",
                "country": "UA",
                "coord": {
                    "lon": 34.083332,
                    "lat": 44.833332
                }
            },
            {
                "id": 803611,
                "name": "Yurevichi",
                "country": "RU",
                "coord": {
                    "lon": 39.934444,
                    "lat": 43.600555
                }
            },
            {
                "id": 614371,
                "name": "Gumist’a",
                "country": "GE",
                "coord": {
                    "lon": 40.973888,
                    "lat": 43.026943
                }
            }
        ];
    }
    CitiesListService.prototype.fetchCitiesList = function () {
        return this.http.get('app/list.json').map(function (res) { return res.json(); });
    };
    return CitiesListService;
}());
CitiesListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CitiesListService);
exports.CitiesListService = CitiesListService;
//# sourceMappingURL=cities-list.service.js.map