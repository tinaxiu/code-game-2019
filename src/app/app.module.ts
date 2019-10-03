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
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './shared/error-handler.service';
import { MessageService } from './shared/message.service';
import { UploadService } from './shared/upload.service';


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
    NgbModule,
    HttpClientModule,
    
  ],
  providers: [
    AppService,
    EventListResolver,
    HttpErrorHandler,MessageService,
    UploadService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
