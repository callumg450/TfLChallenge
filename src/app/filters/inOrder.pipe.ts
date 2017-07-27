import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'inOrder'})
export class InOrder implements PipeTransform{
    arrayWithNumbers: number[];
    
    transform(value: any) {
        if(!value) return null;
        var sortedArray: BusSchedule[] = value.sort((n1,n2) => {
            if (n1.timeToStation > n2.timeToStation) {
                return 1;
            }
        
            if (n1.timeToStation < n2.timeToStation) {
                return -1;
            }
        
            return 0;
            
            });
    
            return sortedArray;
        }
        
        
}

export class BusSchedule{
    timeToArrive: number;
}
