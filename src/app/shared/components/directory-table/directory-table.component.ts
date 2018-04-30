import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { User } from '../../../users/shared/users.model';

@Component({
    selector: 'app-directory-table',
    templateUrl: './directory-table.component.html',
    styleUrls: ['./directory-table.component.scss']
})
export class DirectoryTableComponent implements OnInit, OnChanges {

    @Input() data: Array<User>;

    constructor() {
    }

    ngOnInit() {
        console.log(this.data);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            console.log('Changes happened');
            console.log(changes);
            this.data = changes['data'].currentValue;
        }
    }
}
