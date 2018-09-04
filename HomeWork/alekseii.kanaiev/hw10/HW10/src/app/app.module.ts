import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateTableDirective } from './createTable.dirrective';
import { DivToSpanDirective } from './divToSpan.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateTableDirective,
    DivToSpanDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
