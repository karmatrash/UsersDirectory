import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { IFullEmployeeInfo } from '../../interfaces/employee.interface';
import { environment } from '../../../../../environments/environment';
import { RolesService } from '../../../../roles/roles.service';
import { Employee } from '../../models/employee.model';
import { Role } from '../../../../roles/role.model';
import { EmployeeForm } from '../../employee.form';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.scss']
})
    export class EmployeeFormComponent implements OnInit {

    /**
     * employeeForm - object for reactiveForm approach - FormGroup
     * gender - simple array with items to be selected in form, value can be changed - Array<String>
     * possibleRoles - async data storing variable updating all existing roles in system - Array<Role>
     */
    public employeeForm: FormGroup;
    public gender: Array<string> = environment.gender;
    public possibleRoles: Array<Role>;

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

    constructor(private forms: EmployeeForm,
                private router: Router,
                private rolesService: RolesService) {
    }

    ngOnInit() {
        // subscribing to changes in rolesService for always carrying 'fresh' roles
        this.rolesService.roles
            .subscribe((roles) => {
                this.possibleRoles = roles;
            });

        // need to get initial form value in any case of target
        this.employeeForm = this.forms.getEmployeeForm();

        // feeling the existing Employee with its roles values
        if (this.data) {
            this.data.subscribe((employee) => {
                employee.roles = employee.roles.map(role => role['key']);
                this.employeeForm.setValue(employee);
            });
        }
    }

    /**
     * Holds the logic of adding form controls in the right shape depends on target
     * @param {IFullEmployeeInfo} v
     */
    onSubmitForm(v: IFullEmployeeInfo) {
        v.roles = this.possibleRoles.filter(role => v.roles.includes(role.key));
        switch (this.target) {
            case 'edit':
                v.updated = moment().format('HH:mm DD.MM.YYYY');
                break;
            case 'create':
                v.created = moment().format('HH:mm DD.MM.YYYY');

                break;
        }

        this.formSubmitted.emit(JSON.parse(JSON.stringify(v)));
    }

    /**
     * Navigation 'back-to-the-list' button
     */
    onBackButton() {
        this.router.navigate(['employees']);
    }
}


