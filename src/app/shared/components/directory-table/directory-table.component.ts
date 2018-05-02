import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Employee } from '../../../employee/shared/models/employee.model';
import { Role } from '../../../roles/role.model';

import ColumnSettings from '../../../employee/shared/models/layout.model';

@Component({
    selector: 'app-directory-table',
    templateUrl: './directory-table.component.html',
    styleUrls: ['./directory-table.component.scss']
})
export class DirectoryTableComponent implements OnChanges {

    @Input() data: Array<Employee> | Array<Role>;
    @Input() caption: string;
    @Input() settings: Array<ColumnSettings>;
    @Input() tableCellSwitcher = true;
    public columnMaps: Array<ColumnSettings>;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.data = changes['data'].currentValue;
            console.log(this.data);
        }

        if (this.settings) {
            this.columnMaps = this.settings;
        } else {
            this.noSettingsParsingColumnsLogic();
        }
    }

    private noSettingsParsingColumnsLogic() {
        if (this.data[0]) {
            this.columnMaps = Object.keys(this.data[0])
                .map((key) => {
                    return {
                        primaryKey: key,
                        header: key.slice(0, 1).toUpperCase() +
                        key.replace(/_/g, ' ' ).slice(1)
                    };
                });
        }
    }
}
