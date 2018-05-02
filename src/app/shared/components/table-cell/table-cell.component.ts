import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-table-cell',
    templateUrl: './table-cell.component.html',
    styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements OnInit {
    @Input() value: string;
    @Input() key: string;

    constructor() {
    }

    ngOnInit() {
        if (this.key === 'roles') {
            console.log(this.value);
        }
    }
}
