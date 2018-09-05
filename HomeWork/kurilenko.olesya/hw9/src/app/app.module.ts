import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConvertFromMorse, ConvertToMorse} from './pipe/morse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertFromMorse,
    ConvertToMorse
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
