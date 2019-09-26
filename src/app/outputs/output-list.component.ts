import { Component } from "@angular/core";
import { AppService} from '../shared/app.service'
import { ISession } from "../shared/app.modal";

@Component({
    selector: 'output-list',
    template: ``
})

export class OutputListComponent {
    searchTerm : string =""
    foundSessions: ISession[]

    constructor(private appService: AppService)
    {

    }

    searchSessions(searchTerm)
    {
        this.appService.searchSessions(searchTerm).subscribe(
            sessions => this.foundSessions = sessions           
        )
    }
}