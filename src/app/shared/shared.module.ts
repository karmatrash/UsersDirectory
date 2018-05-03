import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DirectoryTableComponent } from './components/directory-table/directory-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TitleRowComponent } from './components/title-row/title-row.component';

import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex';
import { TableDatePipe } from './pipes/table-date.pipe';
import { PhonePipe } from './pipes/phone.pipe';

import { ModalModule } from 'ngx-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

const CustomSelectOptions: INgxSelectOptions = {
    optionValueField: 'id',
    optionTextField: 'title'
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ModalModule.forRoot(),
        NgxMaskModule.forRoot(),
        NgxSelectModule.forRoot(CustomSelectOptions),
        FormsModule
    ],
    declarations: [
        PhonePipe,
        TableDatePipe,
        DirectoryTableComponent,
        TableCellComponent,
        TitleRowComponent
    ],
    exports: [
        PhonePipe,
        TableDatePipe,
        DirectoryTableComponent,
        TableCellComponent,
        ModalModule,
        NgxMaskModule,
        FormsModule,
        NgxSelectModule,
        TitleRowComponent
    ]
})
export class SharedModule {
}
