import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, NgForm, FormControl } from '@angular/forms'
import { AppService } from '../shared/app.service';
import { ISession, IData} from '../shared/app.modal';
import { identifierModuleUrl } from '@angular/compiler';
import { resetComponentState } from '@angular/core/src/render3/state';

@Component({
    selector: 'batch-input',
    templateUrl:'./batch-input.component.html',
    styles:[
        `
        `
    ]
})

export class BatchInputComponent {

    dataItems: IData[]
    foundData: ISession[]
    selectedSession: ISession
    isChecked: boolean = false;
    batchInputsubmitted: boolean = false
    searchTerms : string = ""

    constructor(private appService: AppService)
    {

    }

    submitFile(formValues)
    {
        this.appService.searchData(formValues).subscribe(
            dataItem => this.dataItems = dataItem
        )
        this.searchTerms= ""
        this.batchInputsubmitted = true
        console.log(formValues)
    }

    submitChanges()
    {
        this.batchInputsubmitted = false
    }


}