import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DirectoryTableComponent } from './components/directory-table/directory-table.component';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        PhonePipe,
        DirectoryTableComponent
    ],
    exports: [
        PhonePipe,
        DirectoryTableComponent
    ]
})
export class SharedModule {
}
