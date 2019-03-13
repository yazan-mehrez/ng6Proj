import {Component, OnInit} from '@angular/core';
import {EmployeesService} from './employees.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
    employee;
    constructor(private empService: EmployeesService) {
    }

    ngOnInit() {
        this.employee = this.empService.getEmployee();
    }

}
