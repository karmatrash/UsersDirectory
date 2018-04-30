import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UserForms } from '../../shared/user.forms';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
    userData: FormGroup;

    constructor(private forms: UserForms) {}

    ngOnInit() {
        this.userData = this.forms.getUserForm();
    }

    onSubmitForm(form: FormGroup) {
        console.log(form.value);
    }
}
