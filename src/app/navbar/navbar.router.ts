import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent} from '../app.component';
import { BusComponent } from '../bus/bus.component';
import { LineServiceComponent } from '../line-service/line-service.component';

const appRoutes: Routes = [
  { path: 'bus', component: BusComponent, pathMatch: 'full' },
  { path: 'service', component: LineServiceComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'bus', pathMatch: 'full'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);