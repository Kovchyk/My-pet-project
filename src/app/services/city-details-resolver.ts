import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { CityDetailsService } from "./city-details.service";

@Injectable()
export class CityDeteilsResolver implements Resolve<any> {

  constructor(private cityDetailsService: CityDetailsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.cityDetailsService.getFiveDayForecastByCityId(route.params['id']);
  }
}