import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalcComponent } from './components/calculator/calc.component';

import { DisplayModule } from './components/display/display.module';
import { KeyBoardModule } from './components/keyboard/keyboard.module';
import { CalcService } from './components/calculator/service/calc.service'

@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    BrowserModule,
    DisplayModule,
    KeyBoardModule
  ],
  providers: [],
  bootstrap: [CalcComponent]
})
export class AppModule { }
