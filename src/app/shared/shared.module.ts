import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DirectoryTableComponent } from './components/directory-table/directory-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';

import { TableDatePipe } from './pipes/table-date.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        PhonePipe,
        TableDatePipe,
        DirectoryTableComponent,
        TableCellComponent
    ],
    exports: [
        PhonePipe,
        TableDatePipe,
        DirectoryTableComponent,
        TableCellComponent
    ]
})
export class SharedModule {
}
