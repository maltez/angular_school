import { Directive, ElementRef, Renderer2, AfterViewChecked, TemplateRef, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[divToSpan]'
})
export class DivToSpanDirective implements OnInit {
    // private divElement: ElementRef;
    constructor (private element: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
        const divEl = this.element.nativeElement;
        // console.log(this.element);
        if (divEl) {
            const spanEl = this.render.createElement('span');
            spanEl.innerHTML = divEl.textContent;
            divEl.parentNode.replaceChild(spanEl, divEl);
        }
    }
}
