export class ColorTableSettings {
  private __headColorEven: string;
  private __headColorOdd: string;

  get HeadColorEven() { return this.__headColorEven; }
  get HeadColorOdd() { return this.__headColorOdd; }

  private __rowColorEven: string;
  private __rowColorOdd: string;

  get RowColorEven() { return this.__rowColorEven; }
  get RowColorOdd() { return this.__rowColorOdd; }

  constructor(
    headColorEven: string='rgb(225,225,225)',
    headColorOdd: string='white',
    rowColorEven: string='rgb(210,225,250)',
    rowColorOdd: string='rgb(250,250,210)',
  ) {
    this.__headColorEven = headColorEven;
    this.__headColorOdd = headColorOdd;
    this.__rowColorEven = rowColorEven;
    this.__rowColorOdd = rowColorOdd;
  }
}
