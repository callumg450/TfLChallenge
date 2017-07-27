import { Component, OnInit } from '@angular/core';
import {HTTPTestService} from '../app.service';
import {NotFoundError} from '../common/not-found.error';
import {AppError} from '../common/app.error';

@Component({
  selector: 'app-line-service',
  templateUrl: './line-service.component.html',
  styleUrls: ['./line-service.component.css']
})
export class LineServiceComponent implements OnInit {

service: Object;
tubeService: any;

modeToggle: boolean = true;


  ngOnInit() {
    this.getLineStatus();
    this.getTubeLineStatus();
  }

  constructor(private _http: HTTPTestService){}
    
  switchToggles(){
    this.modeToggle = !this.modeToggle;
  }

  getLineStatus(){
    this._http.GetServiceStatus().subscribe(
      response => {
        this.service = response;
      },
      (error: AppError) => {
        this.printErrors(error);
      });
  }

  getTubeLineStatus(){
    this._http.GetTubeStatus().subscribe(
      response => {
        this.tubeService = response;
      },
      (error: AppError) => {
        this.printErrors(error);
      }
    )
  }

  printErrors(error: AppError){
    if(error instanceof NotFoundError)
      console.log("INVALID URL - PAGE NOT FOUND");
    else
      console.log("SOMETHING WENT WRONG")
  }
}