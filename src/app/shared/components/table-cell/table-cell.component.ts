import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table-cell',
    templateUrl: './table-cell.component.html',
    styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent {
    @Input() value: string;
    @Input() key: string;

    constructor() {
    }
}
