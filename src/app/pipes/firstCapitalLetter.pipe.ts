import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstCapitalLetter'})
export class FirstCapitalLetterPipe implements PipeTransform {
  transform(value: number): string {
    let valueStr = value + '';
    return valueStr.charAt(0).toUpperCase() + valueStr.substr(1);
  }
}