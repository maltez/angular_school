import { EventEmitter, Injectable } from '@angular/core';
const { floor, random } = Math;

@Injectable()
export class WeatherService {
    public weather: EventEmitter<number> = new EventEmitter();

    getWeather() {
        this.weather.emit(floor(random() * 3 + 1));
    }
}
