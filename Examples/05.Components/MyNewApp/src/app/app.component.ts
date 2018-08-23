import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public toggle = 'None';
  public inpMain = '***';
  public isLife = true;
  public header: string = 'Hello react!';
  title = 'app';

  public handler(inp): void {
    this.header = inp;
  }

  public clickHandler($event: string) {
    console.log($event);
    this.toggle = $event.toString();
  }

  private destroy(): void {
    this.isLife = !this.isLife;
  }
}
