import { Component, OnInit } from '@angular/core';

import { IFullEmployeeInfo } from '../../shared/interfaces/employee.interface';
import { EmployeeService } from '../../shared/employee.service';

@Component({
    selector: 'app-employee-create',
    templateUrl: './employee-create.component.html',
    styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    /**
     * Event we listen from child form-component, gives the data to create new - Employee
     * @param {IFullEmployeeInfo} v
     */
    createEmployee(v: IFullEmployeeInfo) {
        this.employeeService.createEmployee(v);
    }
}
