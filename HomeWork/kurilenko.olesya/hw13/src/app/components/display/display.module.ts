import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcDisplayComponent  } from './component/display.component';

import {DisplayService } from './service/display.service';


@NgModule({
    declarations: [CalcDisplayComponent],
    imports: [CommonModule],
    exports: [CalcDisplayComponent],
    providers: [{provide:DisplayService, useClass: DisplayService }]
})
export class DisplayModule {}
