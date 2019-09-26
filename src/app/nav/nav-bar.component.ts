import { Component } from "@angular/core";
import { ISession} from "../shared/app.modal";
import { AppService } from "../shared/app.service";

@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles:[
        `
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-with: 1200px) {#searchForm {display:none}}
        li > a.active {color: #F97924}
        `
    ]
})

export class NavBarComponent
{
    searchTerm : string =""
    foundSessions: ISession[]

    constructor( private appService: AppService)
    {

    }
}