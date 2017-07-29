import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {AppError} from '../common/app.error';
import {NotFoundError} from '../common/not-found.error';
@Injectable()
export class HTTPTestService{
    constructor(private _http: HttpClient){}
 
    busNumber: string;
    busLine: string;
 
    app_id: string = '8eca0376';
    app_key: string = '4a834e43fe8e1dc0b8f4db7d2dfd16b4';
 
    apiCredentials: string = 'app_id=8eca0376&app_key=4a834e43fe8e1dc0b8f4db7d2dfd16b4';
 
    GetBusTimesFromApi(){
        return this._http.get('https://api.tfl.gov.uk/StopPoint/'+ this.busNumber + '/arrivals');
    }
 
    GetServiceStatus(){
        return this._http.get('https://api.tfl.gov.uk/line/mode/national-rail/status?app_id=8eca0376&app_key=4a834e43fe8e1dc0b8f4db7d2dfd16b4');
    }
 
     GetTubeStatus(){
        return this._http.get('https://api.tfl.gov.uk/Line/Mode/tube/Status');
    }
 
    GetBusNaptan(){
        return this._http.get('https://api.tfl.gov.uk/line/' + this.busLine + '/stoppoints');
    }
}