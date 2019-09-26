import { Component, OnInit } from "@angular/core";
import { FormGroup } from '@angular/forms'
import { AppService } from '../shared/app.service';
import { ISession} from '../shared/app.modal';

@Component({
    selector: 'single-input',
    templateUrl:'./single-input.component.html',
})

export class SingleInputComponent implements OnInit{
    inputForm: FormGroup
    foundSessions: ISession[]

    ngOnInit()
    {

    }
    constructor(private appService: AppService)
    {

    }
    submit(formValues)
    {
        this.appService.searchSessions(formValues).subscribe(
            sessions => this.foundSessions = sessions
        )
    }
}