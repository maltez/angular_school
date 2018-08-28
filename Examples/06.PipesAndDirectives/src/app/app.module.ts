import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectiveFirstTryComponent } from './directive.component';
import { StarPipe } from './stars.pipe';
import { PurePipe, ImpurePipe } from './pure.pipe';
import { ColoredItemDirective } from './custom.directive';
import { SuperPipe } from './super.pipe';

@NgModule({
  declarations: [
    AppComponent, SuperPipe, StarPipe, PurePipe, ImpurePipe, DirectiveFirstTryComponent, ColoredItemDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
