import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/models/employee.model';
import ColumnSettings from '../../../users/shared/models/layout.model';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    public employees: Array<Employee>;
    public employeesSettings: Array<ColumnSettings> = [
        {
            primaryKey: 'first_name',
            header: 'Name'
        },
        {
            primaryKey: 'last_name',
            header: 'Surname'
        },
        {
            primaryKey: 'email',
            header: 'Email'
        },
        {
            primaryKey: 'phone',
            header: 'Phone'
        },
        {
            primaryKey: 'created',
            header: 'Registered'
        },
        {
            primaryKey: 'key',
            header: 'Actions'
        }
    ];

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.employeeService.employees
            .subscribe((employees) => {
                console.log(employees);
                this.employees = employees;
            });
    }
}
