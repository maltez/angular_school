import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayNodule } from './displayModule/display.module';
import { OperationsModule } from './operationModule/operations.module';
import { NumbersModule } from './numbersModule/numbers.module';
import { KeyboardComponent } from './components/keyboard.component';
import { CalculatorService } from './services/calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    DisplayNodule,
    OperationsModule,
    NumbersModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
