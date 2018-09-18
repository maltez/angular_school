import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './components/operations.component';

@NgModule({
    imports: [ CommonModule ],
    exports: [OperationsComponent],
    declarations: [OperationsComponent]
})
export class OperationsModule {}
