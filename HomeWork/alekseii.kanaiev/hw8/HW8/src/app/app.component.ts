import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'HW8';
  public value = '0';
  private result = 0;
  private sign: string;
  private isEquals = false;

  onClick(value: string): void {
    if (!isNaN(parseFloat(value))) {
      if (this.isEquals) {
        this.value = value;
        this.isEquals = false;
      } else {
        (this.value === '0') ? this.value = value : this.value += value;
      }
    } else {
      if (value === '=') {
        if (this.sign !== '=') { this.calculating(this.sign); }
        this.isEquals = true;
      } else {
        (this.sign) ? this.calculating(this.sign) : this.result = parseFloat(this.value);
        this.value = '0';
      }
      this.sign = value;
    }
  }

  private calculating(sign: string): void {
    switch (sign) {
      case '+':
        this.result += parseFloat(this.value);
        break;
      case '-':
        this.result -= parseFloat(this.value);
        break;
      case '*':
        this.result *= parseFloat(this.value);
        break;
      case '/':
        this.result /= parseFloat(this.value);
        break;
      default:
        this.result = parseFloat(this.value);
        break;
    }
    this.value = this.result.toString();
  }
}
