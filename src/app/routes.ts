import { Routes } from "@angular/router";
import { SingleInputComponent } from './inputs/single-input.component';
import { BatchInputComponent } from './inputs/batch-input-component';
import { EventListResolver } from './inputs/data-items-resolver.service';
import { AppComponent } from './app.component';



export const appRoutes:Routes = [
    { path: 'singleInput', component: SingleInputComponent},
    { path: 'batchInput', component: BatchInputComponent, resolve: {dataItems:EventListResolver}} ,
    { path: 'home', component: AppComponent}
]