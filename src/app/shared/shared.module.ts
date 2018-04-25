import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PhonePipe
    ],
    exports: [
        PhonePipe
    ]
})
export class SharedModule {
}
