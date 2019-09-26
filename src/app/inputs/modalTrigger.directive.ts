import { Directive, OnInit,Inject, ElementRef, Input} from "@angular/core";
import { JQ_TOKEN } from "../shared/jQuery.service";

@Directive(
    {
        selector:'[modal-trigger]'
    }
)

export class ModalTriggerDirective implements OnInit
{

    private el: HTMLElement
    @Input('modal-trigger') modalId: string //because '-' is invalid if we have input like: @Input() modal-trigger, so we put the variable in side the @Input

    constructor(@Inject(JQ_TOKEN) private $: any,ref:ElementRef )
    {
        this.el = ref.nativeElement
    }
    ngOnInit(){
        console.log("ModalTriggerDirective")
        this.el.addEventListener('click', e=>
        {
            this.$(`#${this.modalId}`).modal({})
        })
    }
}