import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HW10';
  public people: Person[] = new Array();

  ngOnInit(): void {
    this.people.push(
      {name: 'Nick', age: 38},
      {name: 'Alex', age: 27},
      {name: 'Tom', age: 28}
    );
  }
}
