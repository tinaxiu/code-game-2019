import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs/operators";
import { AppService } from "../shared/app.service";


@Injectable()
export class EventListResolver implements Resolve<any>
{
    constructor(private appServie:AppService)
    {

    }
    //making a sync call in the resolve like an Ajax call
    resolve()
    {
        return this.appServie.getEvents().pipe(map(events =>events))
    }
}