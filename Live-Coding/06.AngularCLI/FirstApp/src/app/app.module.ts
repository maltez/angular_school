import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyFirstComponent } from './my.first.component';
import { MySecondComponent } from './my.second.component';
import { LifeCycleComponent } from './life-cycle.component';
import { Clicked } from './app.service';

@NgModule({
  declarations: [
    MyFirstComponent,
    MySecondComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ Clicked ],
  bootstrap: [ MyFirstComponent ]
})
export class AppModule { }
