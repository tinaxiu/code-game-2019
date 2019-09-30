import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, NgForm, FormControl } from '@angular/forms'
import { AppService } from '../shared/app.service';
import { ISession} from '../shared/app.modal';

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
    selectedSession: ISession
    isChecked: boolean = false;
    searchTerm: string = ""
    

    ngOnInit()
    {


    }

    submit(formValues)
    {
        this.appService.searchSessions(formValues).subscribe(
            sessions => this.foundSessions = sessions
        )
        this.searchTerm = ""
    }

    onSessionClick(session : ISession) {
        this.foundSessions.filter(s => s!=session).forEach( i => (i.isSelected= false))
        this.selectedSession = session
        
    }

    submitSession()
    {
        console.log(this.selectedSession)   
    }

}