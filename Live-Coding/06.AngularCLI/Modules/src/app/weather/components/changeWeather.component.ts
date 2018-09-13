import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
    selector: 'app-change-weather',
    template: `
        <button (click)="onClickHandler()">Change</button>
    `
})
export class ChangeWeatherComponent {
    constructor(private _service: WeatherService) {
    }

    onClickHandler() {
        this._service.getWeather();
    }
}
