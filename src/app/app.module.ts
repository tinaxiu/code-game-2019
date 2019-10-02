import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleInputComponent } from './inputs/single-input.component';
import { OutputListComponent } from './outputs/output-list.component';
import { BatchInputComponent } from './inputs/batch-input-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './shared/app.service';
import { JQ_TOKEN } from "./shared/jQuery.service";
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventListResolver } from './inputs/data-items-resolver.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from "./search.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SingleInputComponent,
    OutputListComponent,
    BatchInputComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    AppService,
    EventListResolver
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
