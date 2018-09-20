import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DisplayComponent
  ],
  exports: [
    DisplayComponent
  ]
})
export class DisplayModule {

}
