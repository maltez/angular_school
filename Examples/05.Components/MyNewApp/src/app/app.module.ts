import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewComponent } from './new.component';
import { LifeCycleComponent } from './app.lifecycle.component';

@NgModule({
  declarations: [
    AppComponent, NewComponent, LifeCycleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
