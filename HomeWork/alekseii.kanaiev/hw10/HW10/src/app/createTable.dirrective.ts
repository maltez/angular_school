import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[createTable]'
})
export class CreateTableDirective implements OnInit {
    private _people: any[];

    constructor (
        private template: TemplateRef<any>, private viewContainer: ViewContainerRef, private render: Renderer2
    ) {}

    @Input('createTable')
    set data(people: any[]) {
        this._people = people;
    }

    ngOnInit () {
        if (this._people) {
            this.viewContainer.createEmbeddedView(this.template);
            this.createTable();
        }
    }
    createTable(): void {
        const keys = Object.keys(this._people[0]);
        const temp = this.template.elementRef.nativeElement.nextSibling;

        for (let i = 0; i <= this._people.length; i++) {
            const row = this.render.createElement('tr');
            this.render.appendChild(temp, row);
            let node = temp.childNodes[i];
            if (i === 0) {
                for (let j = 0; j < keys.length; j++) {
                    const th = this.render.createElement('th');
                    th.innerHTML = keys[j];
                    this.render.appendChild(temp.childNodes[i], th);
                    // console.log(temp.childNodes[i].childNodes[j]);
                    node = temp.childNodes[i].childNodes[j];
                    (j % 2 !== 0) ?
                        this.colorize(node, 'gray') :
                        this.colorize(node);
                }
            } else {
                (i % 2 !== 0) ?
                    this.colorize(node, 'blue') :
                    this.colorize(node, 'yellow');
                for (let j = 0; j < keys.length; j++) {
                    const td = this.render.createElement('td');
                    td.innerHTML = this._people[i - 1][keys[j]];
                    this.render.appendChild(temp.childNodes[i], td);
                }
            }
        }
    }
    colorize(node: TemplateRef<any>, color: string = ''): void {
        this.render.setStyle(node, 'background', color);
    }
}
