import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { ParameterService } from './services/param.service';

import { AppComponent } from './app.component';

const myParameterToken = new InjectionToken<string>('PARAM-PARAM');

function paramFactory(myParameter: string): ParameterService {
  return new ParameterService(myParameter);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    { provide: myParameterToken, useValue: '100500'},
    { provide: WeatherService, useClass: WeatherService },
    { provide: 'Instance2', useClass: WeatherService },
    { provide: ParameterService, useFactory: paramFactory, deps: [myParameterToken]  }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
