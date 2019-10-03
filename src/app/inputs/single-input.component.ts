import { Component, OnInit, Output, EventEmitter, ViewChild, Input, AfterViewInit, ViewContainerRef, ElementRef } from "@angular/core";
import { FormGroup, NgForm, FormControl, FormBuilder } from '@angular/forms'
import { AppService } from '../shared/app.service';
import { ISession} from '../shared/app.modal';
import { SearchComponent } from "../search.component";

@Component({
    selector: 'single-input',
    templateUrl:'./single-input.component.html',
    styles:[
        `
        .grid-title
        {
            background-color: gray 
            color: white
        }`
    ]
})

export class SingleInputComponent{

    inputForm: FormGroup
    foundSessions: ISession[]
    selectedSessionForm: FormGroup
    submittedSession: number
    s: FormControl;

    batchInputsubmitted: boolean = false

    @Input() searchTerms:string

    constructor(private appService: AppService)
    {
    }  

    async ngOnInit(){
        this.s = new FormControl()
        
        this.selectedSessionForm = new FormGroup({
            s: this.s
        })            
        if(this.searchTerms)
        {
            this.foundSessions = await this.appService.getResults(this.searchTerms)
            this.batchInputsubmitted = true
        }
            
        else
            this.batchInputsubmitted = false 
    }

    onSessionClick(session : number) {
        
        console.log(session)
        
    }

    saveSession(formValues)
    {
        this.batchInputsubmitted = false 
        this.searchTerms = ""
    }



}
