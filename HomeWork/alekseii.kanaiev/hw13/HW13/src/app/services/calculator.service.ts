import { BehaviorSubject } from 'rxjs';

export class CalculatorService {
    private value = '0';
    private isEqually = false;
    private result = 0;
    private sign = '';

    public obsValue: BehaviorSubject<string> = new BehaviorSubject(this.value);

    private changeValue(value: string): void {
        this.obsValue.next(value);
        this.value = value;
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
        this.changeValue(this.result.toString());
    }

    public getValue(): string {
        return this.value;
    }

    public takeNumber(value: string): void {
        if (this.isEqually) {
            this.changeValue(value);
            this.isEqually = false;
        }
        if (value === '.') {
            this.changeValue(this.value + value);
        } else {
            (this.value === '0') ?
                this.changeValue(value) :
                this.changeValue(this.value + value);
        }
    }

    public takeOperation(sign: string): void {
        if (sign === '=') {
            if (this.sign !== '=') { this.calculating(this.sign); }
            this.isEqually = true;
        } else {
            // (this.sign) ?
            this.calculating(this.sign);
                // this
            this.changeValue('0');
        }
        this.sign = sign;
    }
}
