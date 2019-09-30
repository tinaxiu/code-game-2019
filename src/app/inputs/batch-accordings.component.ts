import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from "../shared/jQuery.service";
import { ISession, IData } from '../shared/app.modal';
@Component (
    {
        selector: 'batch-accordings',
        templateUrl:'./batch-accordings.component.html',

    }
)

export class BatchAccordings{
    @Input() title:string
    @Input() elementId: string;
    @ViewChild('modalcontainer') containerEl : ElementRef

    foundEvents: IData[]

    constructor(@Inject(JQ_TOKEN) private $: any){

    }
}

