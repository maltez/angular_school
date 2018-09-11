import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './components/numbers.component';

@NgModule({
    imports: [CommonModule],
    exports: [NumbersComponent],
    declarations: [NumbersComponent]
})
export class NumbersModule {}
