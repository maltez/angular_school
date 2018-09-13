import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWeatherComponent } from './components/ShowWeather.component';
import { ChangeWeatherComponent } from './components/changeWeather.component';
import { WeatherService } from './services/weather.service';


@NgModule({
    declarations: [ ShowWeatherComponent, ChangeWeatherComponent ],
    imports: [ CommonModule ],
    providers: [
        WeatherService
    ],
    exports: [ ShowWeatherComponent ]
})
export class WeatherModule {

}
