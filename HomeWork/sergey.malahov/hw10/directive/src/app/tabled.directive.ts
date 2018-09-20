import {Directive, ElementRef, Input, OnInit, SimpleChanges, HostListener} from '@angular/core';

@Directive({
    selector: '[Tabled]'
})
export class TabledDirective implements OnInit {
    @Input()
    public data: Array<object>;

    public element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;
    }

    ngOnInit(): void {
        this.element.innerHTML = `
<table>
<thead>
    <tr>
    
    </tr>
</thead>
<tbody>

</tbody>
</table>
`;
        let theadRow = this.element.querySelector('table thead tr');
        theadRow.appendChild((this.createElement('th', 'Num', 'gray')));
        Object.keys(this.data[0]).map((key, index) =>  {
            theadRow.appendChild((this.createElement('th', key, index % 2 === 0 ? 'white' : 'gray')));
        });

        let tbody = this.element.querySelector('table tbody');
        this.data.map((rowData, index) => {
            let row = this.createElement('tr', '', index % 2 === 0 ? 'blue' : 'yellow');
            row.appendChild(this.createElement('td', index.toString()));
            Object.values(rowData).map(val =>
                row.appendChild(this.createElement('td', val.toString()))
            );
            tbody.appendChild(row);
        })

    }

    private createElement(tag: string, text: string, backgroundColor: string = '') {
        let el = document.createElement(tag);
        if (backgroundColor){
            el.style.backgroundColor = backgroundColor;
        }
        el.innerHTML = text;
        return el;
    }
}
