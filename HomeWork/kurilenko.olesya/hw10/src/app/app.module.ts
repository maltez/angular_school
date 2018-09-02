import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColoredTableDirective } from './colored-table.directive';
import { ReplaceTagsDirective} from './replace-tags.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColoredTableDirective,
    ReplaceTagsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
