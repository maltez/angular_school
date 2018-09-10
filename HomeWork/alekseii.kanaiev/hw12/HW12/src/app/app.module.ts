import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { KeyBoardComponent } from './components/calculator/keyboard/keyboard.component';
import { SignKeyComponent } from './components/calculator/keyboard/signKey/signKey.component';
import { NumKeyComponent } from './components/calculator/keyboard/numKey/numKey.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { CalculatorService } from './services/calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    KeyBoardComponent,
    SignKeyComponent,
    NumKeyComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
