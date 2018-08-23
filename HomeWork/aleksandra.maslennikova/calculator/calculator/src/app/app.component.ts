import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  private buttons = ['1', '2', '3', '+', '*', '4', '5', '6', '-', '/', '7', '8', '9', '0', '=', 'C'];
  private operators = ['+', '-', '/', '*'];
  private calcValue: string = '';
  private sum: number = 0;
  private operator: string;

  onButtonClick = (index) => {
    const button = this.buttons[index];
    if (button === 'C') {
      this.calcValue = '';
      this.operator = '';
      this.sum = 0;
    }
    else if (this.operators.includes(button)) {
      if (!this.calcValue && button === '-') {
        this.calcValue += button;
      } else {
        this.operator = button;
        this.sum = Number(this.calcValue);
        this.calcValue = '';
      }
    } else if (button === '=') {
      const sum = this.calculateResult();
      this.calcValue = sum.toString();
      this.operator = '';
    } else {
      if (this.calcValue === '0' && button == '0') { return }
      this.calcValue += button;
    }
  }

  calculateResult = () => {
    switch (this.operator) {
      case '+': {
        return this.sum + Number(this.calcValue);
      }
      case '-': {
        return this.sum - Number(this.calcValue);
      }
      case '/': {
        return this.sum / Number(this.calcValue);
      }
      case '*': {
        return this.sum * Number(this.calcValue);
      }
      default: { return this.sum }
    }
  }
}
