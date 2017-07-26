import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HTTPTestService} from './app.service';
import { routes } from './navbar/navbar.router';

import {ToMinutes} from './filters/toMinutes.pipe';
import {InOrder} from './filters/inOrder.pipe';
import { LineServiceComponent } from './line-service/line-service.component';
import { BusComponent } from './bus/bus.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GoodServicePipe } from './filters/good-service.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ToMinutes,
    InOrder,
    LineServiceComponent,
    BusComponent,
    RegistrationComponent,
    NavbarComponent,
    GoodServicePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [HTTPTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
