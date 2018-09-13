import { Component, OnInit, EventEmitter } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
    selector: 'app-weather',
    template: `
        <img [src]=weather width=50 height=50/>
        <app-change-weather></app-change-weather>
    `
})
export class ShowWeatherComponent implements OnInit {
    weather = `./assets/01.jpeg`;

    constructor(private _service: WeatherService) {
    }

    ngOnInit() {
        this._service.weather.subscribe((val) => {
            this.weather = `./assets/0${val}.jpeg`;
        });
    }
}
