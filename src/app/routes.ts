import { Routes } from "@angular/router";
import { SingleInputComponent } from './inputs/single-input.component';
import { BatchInputComponent } from './inputs/batch-input-component';



export const appRoutes:Routes = [
    { path: 'singleInput', component: SingleInputComponent},
    { path: 'batchInput', component: BatchInputComponent}
]