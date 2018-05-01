import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { environment } from '../../../../../environments/environment';
import { Employee } from '../../models/employee.model';
import { EmployeeForm } from '../../employee.form';
import { IFullEmployeeInfo } from '../../interfaces/employee.interface';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.scss']
})
    export class EmployeeFormComponent implements OnInit {

    employeeForm: FormGroup;
    gender: Array<string> = environment.gender;

    /**
     * Input param target - defines the sense of submitting - 'create' | 'edit'
     * Input param data - defines the data to be displayed in form - Employee | none
     */
    @Input() target: string;
    @Input() data: Observable<Employee>;

    /**
     * Outputting event with two cases for both possible parents - UsersCreate | UsersDetails
     * @type {EventEmitter<any>}
     */
    @Output() formSubmitted = new EventEmitter();

    constructor(private forms: EmployeeForm) {
    }

    ngOnInit() {
        console.log('employee form');

        this.employeeForm = this.forms.getEmployeeForm();
        console.log(this.target);

        if (this.data) {
            this.data.subscribe((employee) => {
                this.employeeForm.setValue(employee);
            });
        }
    }

    onSubmitForm(v: IFullEmployeeInfo) {
        console.log(v);
        switch (this.target) {
            case 'edit':
                v.updated = moment().format('HH:mm DD.MM.YYYY');
                break;
            case 'create':
                v.created = moment().format('HH:mm DD.MM.YYYY');
                break;
        }
        this.formSubmitted.emit(v);
    }
}
