import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'toMinutes'})
export class ToMinutes implements PipeTransform{
  transform(value: number) {
    value = Math.round(value / 60);
    if(value < 1)
      return "Approaching";
    return Math.round(value);
  }
  
}