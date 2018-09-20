import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    KeyboardComponent
  ],
  exports: [
    KeyboardComponent
  ]
})
export class KeyboardModule {

}
