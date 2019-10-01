import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, NgForm, FormControl, FormBuilder } from '@angular/forms'
import { AppService } from '../shared/app.service';
import { ISession} from '../shared/app.modal';
import { runInThisContext } from 'vm';

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

export class SingleInputComponent implements OnInit{
    constructor(private appService: AppService)
    {

    }

    inputForm: FormGroup
    foundSessions: ISession[]
    selectedSessionForm: FormGroup
    submittedSession: number
    s: FormControl;

    searchTerm: string = ""


    ngOnInit()
    {
        this.s = new FormControl()
        
        this.selectedSessionForm = new FormGroup({
            s: this.s
        })

    }

    submit(formValues)
    {
        this.appService.searchSessions(formValues).subscribe(
            sessions => this.foundSessions = sessions
        )
            
        this.searchTerm = ""
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
        
    }


}
