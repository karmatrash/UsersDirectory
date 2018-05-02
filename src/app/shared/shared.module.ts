import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DirectoryTableComponent } from './components/directory-table/directory-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';

import { TableDatePipe } from './pipes/table-date.pipe';
import { PhonePipe } from './pipes/phone.pipe';

import { ModalModule } from 'ngx-bootstrap';
// import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ModalModule.forRoot(),
        // NgxMaskModule.forRoot(),
        FormsModule
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
        ModalModule,
        // NgxMaskModule,
        FormsModule
    ]
})
export class SharedModule {
}
