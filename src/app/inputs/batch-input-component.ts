import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { AppService } from '../shared/app.service';
import { ISession, IData} from '../shared/app.modal';
import { FormGroup, FormControl } from '@angular/forms';
import { Session } from 'protractor';
import { UploadService } from '../shared/upload.service';


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
    resultsData: ISession[] = []
    foundData: ISession[]
    selectedSession: ISession
    batchInputsubmitted: boolean = false
    //searchTerms : string = "s,d"
    submittedDataItems: ISession[] = []

    @Input() searchTerms:File
    
    constructor(private appService: AppService, private upload:UploadService)
    {

    }
    async ngOnInit() {


        if(this.searchTerms)
        {
            this.dataItems = await this.upload.upload(this.searchTerms)
            this.batchInputsubmitted = true
        }
            
        else
            this.batchInputsubmitted = false 

        
    }

    submitFile(formValues)
    {
    }

    submitChanges()
    {
        var finalResults : ISession[] = []
        this.submittedDataItems = setDefault(this.dataItems)
        console.log("submitted", this.submittedDataItems)
        if(this.resultsData.length === 0){
            finalResults = this.submittedDataItems
        }
        else{

            this.submittedDataItems.forEach( item =>
                {
                    let index = this.resultsData.findIndex(d => d.transactionTypeCode === item.transactionTypeCode)
                    if(index>-1)
                    {
                        item = this.resultsData[index]
                    }
                    finalResults.push(item)
                        
                }) 
        }
        console.log("changed", finalResults)
        this.batchInputsubmitted = false
        this.dataItems = null
        
        
    }

    onSessionClick(session: ISession)
    {
        if(this.resultsData.find(s => s.transactionTypeCode === session.transactionTypeCode))
        {
            let index = this.resultsData.findIndex(s => s.transactionTypeCode === session.transactionTypeCode)
            this.resultsData[index] = session           
        }
        else{
            this.resultsData.push(session)
        }   
    }
}

function setDefault(dataItems: IData[])
{
    var DefaultResults: ISession[] = []

    dataItems.forEach( item =>
        {
            var session = item.sessions[0]
            DefaultResults = DefaultResults.concat(session)
        } )
    return DefaultResults
}

