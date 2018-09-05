import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyBoardComponent } from './components/calculator/keyboard/keyboard.component';
import { NumKeyComponent } from './components/calculator/keyboard/numKey/numKey.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SignKeyComponent } from './components/calculator/keyboard/signKey/signKey.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyBoardComponent,
    NumKeyComponent,
    SignKeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
