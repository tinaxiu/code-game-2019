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
    public currentJogging: any;
    public joggingData: Array<any>;

    @Input() searchTerms:string

    constructor(private appService: AppService)
    {
        appService.getResults(this.searchTerms).subscribe((data: any) => this.joggingData = data);
        this.searchTerms = ""
        this.batchInputsubmitted = true 
    }  

    ngOnInit(){
        this.s = new FormControl()
        
        this.selectedSessionForm = new FormGroup({
            s: this.s
        })
            
        this.searchTerms = ""
        this.batchInputsubmitted = false 

    }

    onInitialSeach()
    {
        this.appService.getResults(this.searchTerms).subscribe((data: any) => this.joggingData = data);           
        this.searchTerms = ""
        this.batchInputsubmitted = true 
    }

    onSessionClick(session : number) {
        
        console.log(session)
        
    }

    saveSession(formValues)
    {
        if(formValues.s)
        {
           console.log(formValues.s) 
           
        }           
        else
            console.log(this.foundSessions[0].SKU)
            this.batchInputsubmitted = false
    }


}
