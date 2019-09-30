import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleInputComponent } from './inputs/single-input.component';
import { OutputListComponent } from './outputs/output-list.component';
import { BatchInputComponent } from './inputs/batch-input-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './shared/app.service';
import { JQ_TOKEN } from "./shared/jQuery.service";
import { SimpleModalComponent } from './inputs/simple-modal.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/nav-bar.component';
import { ModalTriggerDirective } from './inputs/modalTrigger.directive';
import { EventListResolver } from './inputs/data-items-resolver.service';
let jQuery = window['$']

@NgModule({
  declarations: [
    AppComponent,
    SingleInputComponent,
    OutputListComponent,
    BatchInputComponent,
    SimpleModalComponent,
    NavBarComponent,
    ModalTriggerDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppService,
    EventListResolver,
    {provide: JQ_TOKEN, useValue:  jQuery},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
