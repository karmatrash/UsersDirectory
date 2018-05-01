import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UserForms } from '../../user.forms';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup;

    @Input() target: string;
    // @Input() data: User | null;

    constructor(private forms: UserForms) {
    }

    ngOnInit() {
        console.log(this.target);

        this.userForm = this.forms.getUserForm();
    }
}
