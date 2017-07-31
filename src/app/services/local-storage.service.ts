import {Injectable} from '@angular/core';

@Injectable()

export class LocalStorageService {
    getDataFromLocalStorage(storageName: string) {
        return JSON.parse(localStorage.getItem(storageName));
    }
    
    saveDataToLocalStorage(storageName, value) {
        localStorage.setItem(storageName, JSON.stringify(value));
    }
}