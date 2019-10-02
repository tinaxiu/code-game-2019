import { Component } from "@angular/core";

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

}