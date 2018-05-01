import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DirectoryTableComponent } from './components/directory-table/directory-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';

import { TableDatePipe } from './pipes/table-date.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ModalModule.forRoot()
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
        TableCellComponent,
        ModalModule
    ]
})
export class SharedModule {
}
