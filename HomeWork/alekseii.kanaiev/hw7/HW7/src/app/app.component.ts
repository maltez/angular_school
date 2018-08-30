import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'HW7';

  public value = '0';
  private result: number;
  private sign: string;

  public clickNum($event: any): void {
    (this.value === '0') ?
    this.value = $event.toElement.innerText :
    this.value += $event.toElement.innerText;
  }

  public clickSign($event: any): void {
    if (this.sign) {
      this.calculating(this.sign);
    } else {
      this.result = parseInt(this.value, 10);
    }
    this.sign = $event.toElement.innerText;
    this.value = '0';
  }

  public clickResult(): void {
    this.calculating(this.sign);
    this.sign = '';
  }

  private calculating(sign: string): void {
    switch (sign) {
      case '+':
        this.result += parseInt(this.value, 10);
        break;
      case '-':
        this.result -= parseInt(this.value, 10);
        break;
      case '*':
        this.result *= parseInt(this.value, 10);
        break;
      case '/':
        this.result /= parseInt(this.value, 10);
        break;
      default:
        break;
    }
    this.value = this.result.toString();
  }
}
