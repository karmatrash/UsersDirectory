import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { User } from '../../../users/shared/models/users.model';
import { Role } from '../../../roles/role.model';

@Component({
    selector: 'app-directory-table',
    templateUrl: './directory-table.component.html',
    styleUrls: ['./directory-table.component.scss']
})
export class DirectoryTableComponent implements OnInit, OnChanges {

    @Input() data: Array<User> | Array<Role>;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.data = changes['data'].currentValue;
            console.log(this.data);
        }
    }
}
