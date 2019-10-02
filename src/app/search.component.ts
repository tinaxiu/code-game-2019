import { Component, Output, EventEmitter, AfterViewInit, ViewChild, Input } from "@angular/core";
import { SingleInputComponent } from './inputs/single-input.component';
import { AppService } from './shared/app.service';
import { ISession, IData } from './shared/app.modal';

@Component({
    selector:'search',
    templateUrl:'./search.component.html',
    styles:[
        `
        .wk-label{ 
        font-family: "Fira Sans","Helvetica Neue",Helvetica,Roboto,Arial,sans-serif!important;
        margin-bottom: 0!important;
        font-size: 15px!important;
        }
        .search-span{
            display: inline-block;
            border: 1px solid #dadada;
            background-color: #fff!important;
            width: 100%;
            margin-bottom: 0;
            font-size: 13px;
            font-weight: lighter;
            line-height: 1.52857143;
            text-align: left;
            vertical-align: middle;
            cursor: pointer;
            background-image: none;
            height: auto!important;
        }
        .myfont{
            margin-bottom: 0!important;
            font-size: 15px!important;
        }


        `
    ]
})

export class SearchComponent
{

    searchType: boolean
    public searchTerm: string = "s"

    searchsubmitted: boolean

    singleSearchResults: ISession[] = []
    batchSearchResults: IData[] = []
   

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.searchType = true
        this.searchsubmitted = false
    }

    constructor(private appService: AppService)
    {
        this.searchTerm = ""
    }   

    
    getName(str: string)
    {
        if(str === "single")
            this.searchType = true

        else 
            this.searchType = false

    }

    @Input() name: string;
    

    suggestSubmit(formValue){
        console.log(formValue)
        if(this.searchType)
        {
            this.searchTerm = formValue
        }
        else
        {
            //waiting for the data
            this.searchTerm = formValue
        }

        this.searchsubmitted = true

        
    }

}