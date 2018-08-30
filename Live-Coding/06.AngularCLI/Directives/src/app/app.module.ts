import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColoredItemDirective } from './custom.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ColoredItemDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
