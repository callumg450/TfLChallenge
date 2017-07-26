import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'inOrder'})
export class InOrder implements PipeTransform{
    transform(value: Array<number>) {
    var sortedArray: number[] = value.sort((n1,n2) => {
    if (n1 > n2) {
        return 1;
    }

    if (n1 < n2) {
        return -1;
    }

    return 0;
});
    }
}