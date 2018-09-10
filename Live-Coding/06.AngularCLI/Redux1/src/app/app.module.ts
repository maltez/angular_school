import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { DecrementComponent } from './components/decrement/decrement.component';
import { IncrementComponent } from './components/increment/increment.component';


@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    DecrementComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
