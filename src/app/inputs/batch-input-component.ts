import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, NgForm, FormControl } from '@angular/forms'
import { AppService } from '../shared/app.service';
import { ISession, IData} from '../shared/app.modal';
import { identifierModuleUrl } from '@angular/compiler';
import { resetComponentState } from '@angular/core/src/render3/state';
import { forEach } from '@angular/router/src/utils/collection';
import { Session } from 'protractor';

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
    searchTerms : string = "s,d"

    constructor(private appService: AppService)
    {

    }

    submitFile(formValues)
    {
        this.appService.searchData(formValues).subscribe(
            dataItem => this.dataItems = dataItem
        )
        this.searchTerms= ""
        
        console.log(this.dataItems)
        this.batchInputsubmitted = true

        this.dataItems.forEach(dataItem => dataItem.sessions.sort(sortByPercentage))       
    }

    submitChanges()
    {
        this.batchInputsubmitted = false
        
    }
}

function sortByPercentage(p1: ISession, p2: ISession)
{
    if(p1.Percentage < p2.Percentage) return 1
    else if(p1.Percentage === p2.Percentage) return 0
    else return -1
}