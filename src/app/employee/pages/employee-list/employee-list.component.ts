import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/models/employee.model';
import ColumnSettings from '../../shared/models/layout.model';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    /**
     * employees - async Array subscribed to employeeDataService changes - Array<Employee>
     * employeesSettings - table view params taken from environment - Array<ColumnSettings>
     */
    public employees: Array<Employee>;
    public employeesSettings: Array<ColumnSettings> = environment.employeeSettings;

    constructor(private employeeService: EmployeeService,
                private router: Router) {
    }

    ngOnInit() {
        this.employeeService.employees
            .subscribe((employees) => {
                console.log(employees);
                this.employees = employees;
            });
    }

    navigateToCreate() {
        this.router.navigate(['employees/create']);
    }
}
