import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToMorzePipe, FromMorzePipe } from './morze.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToMorzePipe,
    FromMorzePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
