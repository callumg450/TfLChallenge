import { Component, OnInit } from '@angular/core';
import {HTTPTestService} from '../app.service';

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
  constructor(private _http: HTTPTestService){}

  busId;
    
  getBusJourneys(){
    if(this.busId == null){
      this.emptyBusId = true;
      return;
    }
    this.emptyBusId = false;
    this._http.busId = this.busId;

    this._http.GetBusTimesFromApi().subscribe(
      response => {
        this.bus = response;
      },
      error => console.log("Whoops, something went wrong"));
  }

}
