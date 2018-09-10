import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToAnotherTagDirective } from './divToSpan.directive';
import { TableDirective } from './table.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToAnotherTagDirective,
    TableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
