import { Component, OnInit } from '@angular/core';
import {HTTPTestService} from '../services/app.service';
 
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
 
  ngOnInit() {
  }
   
  bus: Object;
  emptyBusId: boolean;
  busLine: string;
  private currentTime: Date;
 

  constructor(private _http: HTTPTestService){
    this.currentTime = new Date();
  }
 
  busId: string;
   
  getBusJourneys(){
    this._http.GetBusTimesFromApi().subscribe(
      response => {
        this.bus = response;
      },
      error => console.log("Whoops, something went wrong"));
  }
 
  getBusNaptanCode(){
    this.checkForNullInput();
 
    this.emptyBusId = false;
    this._http.busLine = this.busLine;
 
    this._http.GetBusNaptan().subscribe(
      (response: BusNaptan) => {
        this._http.busNumber = response[0].naptanId;
        this.getBusJourneys();
        console.log("Request made");
      },
      error => console.log("error"));
   
  }
 
  private checkForNullInput(){
    if(this.busLine == null){
      this.emptyBusId = true;
      return;
    }
  }
 
}
 
export class BusNaptan{
  naptanId: string;
}