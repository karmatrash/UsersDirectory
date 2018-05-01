import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { User } from '../../../users/shared/models/users.model';
import { Role } from '../../../roles/role.model';

import ColumnSettings from '../../../users/shared/models/layout.model';

@Component({
    selector: 'app-directory-table',
    templateUrl: './directory-table.component.html',
    styleUrls: ['./directory-table.component.scss']
})
export class DirectoryTableComponent implements OnInit, OnChanges {

    @Input() data: Array<User> | Array<Role>;
    @Input() caption: string;
    @Input() settings: Array<ColumnSettings>;
    @Input() tableCellSwitcher: boolean;
    public columnMaps: Array<ColumnSettings>;

    constructor() {
    }

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.data = changes['data'].currentValue;
            console.log(this.data);
        }

        if (this.settings) {
            this.columnMaps = this.settings;
        } else {
            this.columnMaps = Object.keys(this.data[0])
                .map((key) => {
                    return {
                        primaryKey: key,
                        header: key.slice(0, 1).toUpperCase() +
                        key.replace(/_/g, ' ' ).slice(1)
                    };
                });
        }
        // this.keys = Object.keys(this.data[0]);
        // console.log(this.keys);
    }
}
