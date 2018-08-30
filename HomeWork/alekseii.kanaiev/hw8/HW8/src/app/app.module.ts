import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { KeyBoardComponent } from './keyboard/keyboard.component';
import { KeyComponent } from './keyboard/key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    KeyBoardComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
