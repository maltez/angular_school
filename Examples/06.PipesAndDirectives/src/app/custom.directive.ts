import { Directive, ElementRef, Input, OnInit, SimpleChanges, HostListener } from '@angular/core';

@Directive({
    selector: '[Colored]'
})
export class ColoredItemDirective implements OnInit {
    @Input()
    public color: string;

    public element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.element.style.backgroundColor = this.color;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.element.style.backgroundColor = 'white';
    }

    ngOnInit(): void {
        this.element.style.backgroundColor = 'white';
    }
}
