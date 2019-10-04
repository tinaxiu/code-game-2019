import { Component, Output, EventEmitter, AfterViewInit, ViewChild, Input } from "@angular/core";
import { SingleInputComponent } from './inputs/single-input.component';
import { AppService } from './shared/app.service';
import { ISession, IData } from './shared/app.modal';
import {Router} from "@angular/router";

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
    searchTerm: string = "s"
    searchName: string = "Select Input Type"
    searchsubmitted: boolean

    singleSearchResults: ISession[] = []
    batchSearchResults: IData[] = []
   

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.searchType = undefined
        this.searchsubmitted = false
    }

    constructor(private appService: AppService,private router : Router)
    {
        this.searchTerm = ""
    }   

    
    getName(str: string)
    {
        this.searchTerm = ""
        this.router.navigate(['/'])

        if(str === "single")
        {
            this.searchName = "Single Input"
            this.searchType = true
            
        }
            

        else 
        {
            this.searchName = "Batch Input"
            this.searchType = false
        }
            

    }

    @Input() name: string;
    

    suggestSubmit(formValue){
        if(this.searchType)
        {
            this.searchTerm = formValue
            this.appService.searchTerms = formValue
            this.router.navigate(['/singleInput'])
                        
        }
        else
        {
            this.searchTerm = formValue
        }

        this.searchsubmitted = true

        
    }

}