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

  ngOnInit() {
    this.getLineStatus();
  }

  constructor(private _http: HTTPTestService){}
    
  getLineStatus(){
    this._http.GetServiceStatus().subscribe(
      response => {
        this.service = response;
      },
      (error: AppError) => {
        if(error instanceof NotFoundError)
          console.log("INVALID URL - PAGE NOT FOUND");
        else
          console.log("SOMETHING WENT WRONG")
      });
  }
}