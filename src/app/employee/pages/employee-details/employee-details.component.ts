import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../../shared/models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../shared/employee.service';
import { IFullEmployeeInfo } from '../../shared/interfaces/employee.interface';

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

    editEmploye(employe: IFullEmployeeInfo) {
        console.log('editing');
        console.log(employe);
        this.employeeService.updateEmployee(this.employeeKey, employe);
    }
}
