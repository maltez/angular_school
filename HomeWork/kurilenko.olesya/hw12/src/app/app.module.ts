import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { CalcService } from './servics/calc.service';

import { CalcComponent } from './components/calc.component';
import { CalcButtonComponent } from './components/buttons/calc.Button.component';
import { CalcDisplayComponent } from './components/display/calc.display.component';

@NgModule({
  declarations: [
    CalcComponent,
    CalcButtonComponent,
    CalcDisplayComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CalcService],
  bootstrap: [CalcComponent]
})
export class AppModule { }
