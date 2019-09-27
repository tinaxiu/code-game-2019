import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from "../shared/jQuery.service";
@Component (
    {
        selector: 'simple-modal',
        templateUrl:'./simple-modal.component.html',

    }
)

export class SimpleModalComponent{
    @Input() title:string
    @Input() elementId: string;
    @ViewChild('modalcontainer') containerEl : ElementRef
    @Input() onCloseBody: string

    constructor(@Inject(JQ_TOKEN) private $: any){

    }

    closeModal()
    {
      if(this.onCloseBody.toLocaleLowerCase() === 'true')
        this.$(this.containerEl.nativeElement ).modal('hide')
    }
}