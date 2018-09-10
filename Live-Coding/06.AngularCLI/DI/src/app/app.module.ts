import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeService } from './time.service';
import { FakeTimeService } from './fake.time.service';

import { AppComponent } from './app.component';

function serviceFactory (env) {
    return env === 'PROD' ? new TimeService() : new FakeTimeService();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'ENV', useValue: 'DEV'},
    { provide: 'Version', useValue: '1234'},
    { provide: TimeService, useFactory: serviceFactory, deps: ['ENV']},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
