import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent  } from './calculate/calculate.component';
import { ClearComponent  } from './clear/clear.component';
import { NumberComponent  } from './number/number.component';
import { OperationComponent } from './operation/operation.component';

import {KeyBoardService } from './service/keyboard.service';


@NgModule({
    declarations: [CalculateComponent,ClearComponent,NumberComponent,OperationComponent],
    imports: [CommonModule],
    exports: [CalculateComponent,ClearComponent,NumberComponent,OperationComponent],
    providers: [{provide:KeyBoardService, useClass: KeyBoardService }]
})
export class KeyBoardModule {}
