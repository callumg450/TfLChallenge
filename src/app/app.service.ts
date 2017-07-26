import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {AppError} from './common/app.error';
import {NotFoundError} from './common/not-found.error';
@Injectable()
export class HTTPTestService{
    constructor(private _http: HttpClient){}

    busId: string;

    GetBusTimesFromApi(){
        return this._http.get('https://api.tfl.gov.uk/StopPoint/'+ this.busId + '/arrivals')
            .catch((error: Response) => {
                if(error.status === 404)
                    return Observable.throw(new NotFoundError());
                return Observable.throw(new AppError());
            });
    }

    GetServiceStatus(){
        return this._http.get('https://api.tfl.gov.uk/line/mode/national-rail/status');
    }
}

