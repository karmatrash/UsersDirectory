import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFullEmployeeInfo } from '../../shared/interfaces/employee.interface';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/models/employee.model';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

    public employeeKey: string;
    public employee: Observable<Employee>;

    constructor(private route: ActivatedRoute,
                private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.employeeKey = this.route.snapshot.params.key;
        this.employee = this.employeeService.getEmployeeByUID(this.employeeKey);
    }

    /**
     * Event we listen from child form-component, gives the data to update current - Employee
     * @param {IFullEmployeeInfo} employee
     */
    editEmployee(employee: IFullEmployeeInfo) {
        console.log('editing');
        console.log(employee);
        this.employeeService.updateEmployee(this.employeeKey, employee);
    }
}
