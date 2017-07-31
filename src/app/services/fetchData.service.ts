import {Injectable} from '@angular/core';
import {Component, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { Weather } from "../weather";

@Injectable()

export class FetchDataService {

    public citiesBehaviorSubject = new BehaviorSubject([]);
    private date = new Subject();
    private apiKey: string = 'e4a01aeef0993c451f22d98569c8e243';
    private subscription: Subscription;

    constructor(private http: Http) {
        this.updateDataByTimer();
    }
    
    getCurrentWeatherByCityId(id: number): Observable<any> {
         return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=' + id + '&units=metric&APPID=' + this.apiKey)
                             .map(res => res.json());
    }
    
    getDataFromLocalStorage(storageName: string) {
        return JSON.parse(localStorage.getItem(storageName));
    }
    
    saveDataToLocalStorage(storageName, value) {
        localStorage.setItem(storageName, JSON.stringify(value));
    }
    
    addCity(id: number) {
        if (id) {
            
            let citiesArray: Weather[] = this.getDataFromLocalStorage('storedCities');
            // if localStorage is empty declare an array
            if (citiesArray === null) {
                citiesArray = [];
            }

            if (!citiesArray.some((val: any) => { return val.id == id;} )) {
                this.getCurrentWeatherByCityId(id).subscribe(data => {
                    let weather = new Weather(data.id, data.dt, data.name, data.weather[0].main, data.weather[0].icon, data.weather[0].description, data.main.temp);
                    citiesArray.unshift(weather);
                    this.saveDataToLocalStorage('storedCities', citiesArray);
                    this.citiesBehaviorSubject.next(this.getDataFromLocalStorage('storedCities'));
                });
            }
        }
    }

    getCitiesArray() {
        return this.citiesBehaviorSubject;
    }

    getDate() {
        return this.date;
    }

    deleteItem(id:number) {
        let citiesArray = this.getDataFromLocalStorage('storedCities');
        // if localStorage is empty declare an array
        if (citiesArray === null) {
            citiesArray = [];
        }

        citiesArray.forEach((element: any, index: number) => {
            if (element.id == id) {
                citiesArray.splice(index, 1);
                this.saveDataToLocalStorage('storedCities', citiesArray);
                this.citiesBehaviorSubject.next(this.getDataFromLocalStorage('storedCities'));
                //delete detail info from Local Storage
                localStorage.removeItem(id + '');
            } 
        });

    }

    updateDataByTimer() {
        
        let timer = Observable.timer(0, 600000);
        // if timer has already run than stop it before running it again
        if (this.subscription) {
            this.subscription.unsubscribe();
        }

        this.subscription = timer.subscribe(x => {
            this.updateLastRefreshingDate();
            this.updateAllData();
        });

    }

    updateAllData() {
        let citiesArray: Weather[] = this.getDataFromLocalStorage('storedCities');
        // if localStorage is empty declare an array
        if (citiesArray === null) {
            citiesArray = [];
        }
        let ids: string = '';

        if (citiesArray.length) {
            // Get ids as a string to pass it to a request
            let ids = citiesArray.map((el: any) => el.id).join(',');

            citiesArray.forEach( (element: any) => {
                this.updateCityDetails(element.id);
            });

            this.updateLastRefreshingDate();

            let groupResponce =  this.http.get('http://api.openweathermap.org/data/2.5/group?id=' + ids + '&units=metric&APPID=' + this.apiKey).map(res => res.json());
            
            groupResponce.subscribe(weatherArray => {
                citiesArray = [];
                weatherArray.list.forEach(data => {
                    let weather = new Weather(data.id, data.dt, data.name, data.weather[0].main, data.weather[0].icon, data.weather[0].description, data.main.temp);
                    citiesArray.push(weather);
                });
                this.saveDataToLocalStorage('storedCities', citiesArray);
                this.citiesBehaviorSubject.next(this.getDataFromLocalStorage('storedCities'));
            });
        }
    }

    getFiveDayForecastByCityId(id: number) {
       return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=' + id + '&cnt=5&units=metric&APPID=' + this.apiKey).map(res => res.json());
    }

    updateCityDetails(id: number) {

        let cityDetails = this.getFiveDayForecastByCityId(id);
        cityDetails.subscribe(weatherDetails => {
            this.saveDataToLocalStorage(weatherDetails.city.id, weatherDetails);
        });

    }

    updateLastRefreshingDate() {
        let date = new Date().getTime();
        this.saveDataToLocalStorage('lastDate', date);
        let updatedDate = this.getDataFromLocalStorage('lastDate');
        this.date.next(updatedDate);
    }

}