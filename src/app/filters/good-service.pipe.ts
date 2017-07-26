import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goodService'
})
export class GoodServicePipe implements PipeTransform {

  transform(array: Array<number>, args: string): Array<number> {
    array.sort((a: number, b: number) => {
	    if ( a[args] < b[args] ){
	    	return -1;
	    }else if( a[args] > b[args] ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  }

}
