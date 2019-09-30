import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, NgForm, FormControl } from '@angular/forms'
import { AppService } from '../shared/app.service';
import { ISession, IData} from '../shared/app.modal';
import { ActivatedRoute } from "@angular/router";
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
    resultsData: IData[] = []
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
    
        this.batchInputsubmitted = true            
    }

    submitChanges()
    {
        this.batchInputsubmitted = false
        
    }

    onSessionClick(session: ISession)
    {
        var dataItem : IData
        console.log(this.dataItems)
        dataItem = {
            id : this.dataItems.find(data => data.id=== session.id).id,
            description : this.dataItems.find(data => data.id=== session.id).description,
            sessions : [
                this.dataItems.find(data => data.id=== session.id).sessions.find( s => s.SKU === session.SKU)
            ]           
        }
        console.log(dataItem)
        
        if(this.resultsData && this.resultsData.find(dataitem => dataitem.id === dataItem.id))
            this.resultsData.find(dataitem => dataitem.id === dataItem.id).sessions[0] = dataItem.sessions[0]
        else
            this.resultsData.push(dataItem)

        console.log(this.resultsData)
    }
}

function sortByPercentage(p1: ISession, p2: ISession)
{
    if(p1.Percentage < p2.Percentage) return 1
    else if(p1.Percentage === p2.Percentage) return 0
    else return -1
}