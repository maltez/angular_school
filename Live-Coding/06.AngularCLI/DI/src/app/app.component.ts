import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <span>Seconds<p>{{time}}</p></span>
    <p>{{_version}}</p>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'DI';
  time = 0;

  constructor(
    private timeService: TimeService,
    @Inject('Version')private _version: string) {
  }

  ngOnInit(): void {
    this.timeService.time.subscribe((timer) => {
      this.time = timer;
    });
  }

  ngOnDestroy(): void {
  }
}
