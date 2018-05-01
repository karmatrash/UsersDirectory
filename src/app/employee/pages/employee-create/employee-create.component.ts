import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { IFullEmployeeInfo } from '../../shared/interfaces/employee.interface';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {}

    createEmployee(v: IFullEmployeeInfo) {
        console.log('creation');
        console.log(v);
        this.employeeService.createEmployee(v);
    }
}
