import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { ParameterService } from './services/param.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>Temperature in Kharkov: {{temperature}} C {{serviceId}}</p>
      <p>Temperature in Kiev: {{temperatureK}} C {{service2Id}}</p>
      <p>{{paramService.myParameter}}</p>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  public temperature = 19;
  public serviceId: number;
  public service2Id: number;
  public temperatureK = 23;

  constructor(
    private weatherForecast: WeatherService,
    @Inject('Instance2') private weatherForecastK: WeatherService,
    private paramService: ParameterService) {
      this.serviceId = weatherForecast.id;
      this.service2Id = weatherForecastK.id;
  }

  ngOnInit(): void {
    this.weatherForecast.Temperature.subscribe(
      (val: number) => {
        this.temperature = val;
      }
    );

    this.weatherForecastK.Temperature.subscribe(
      (val: number) => {
        this.temperatureK = val;
      }
    );
  }

  ngOnDestroy(): void {
  }
}
