import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TabledDirective} from './tabled.directive';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        TabledDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
