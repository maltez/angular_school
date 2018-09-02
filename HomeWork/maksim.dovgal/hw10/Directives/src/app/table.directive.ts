import {Directive, OnInit, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[table]'
})
export class TableDirective implements OnInit {
  @Input('table')
  data: Array<any>;

  // u can set your own colors by this directives
  @Input('evenColumnHeaderColor')
  evenHeader: string = 'grey';

  @Input('oddColumnHeaderColor')
  oddHeader: string = 'white';

  @Input('evenRowColor')
  evenRow: string = 'blue';

  @Input('oddRowColor')
  oddRow: string = 'yellow';

  private table: Element;

  constructor(
    private element: ElementRef
  ) {

  }

  ngOnInit() {
    this.createTable();
  }

  createTable() {
    this.table = document.createElement('table');
    this.createHeader();
    this.createBody();
    this.element.nativeElement.parentNode.replaceChild(this.table, this.element.nativeElement);
  }

  createHeader() {
    let tr = document.createElement('tr');
    Object.keys(this.data[0]).forEach((key, i) => {
      let th = document.createElement('th');
      th.innerHTML = key;
      i % 2 === 0 ? th.style.backgroundColor = this.evenHeader : th.style.backgroundColor = this.oddHeader;
      tr.appendChild(th);
    });
    this.table.appendChild(tr);
  }

  createBody() {
    this.data.forEach((obj, i) => {
      let tr = document.createElement('tr');
      for (let key in obj) {
        let td = document.createElement('td');
        td.innerHTML = obj[key];
        tr.appendChild(td);
      }
      i % 2 === 0 ? tr.style.backgroundColor = this.evenRow : tr.style.backgroundColor = this.oddRow;
      this.table.appendChild(tr);
    });
  }

}
