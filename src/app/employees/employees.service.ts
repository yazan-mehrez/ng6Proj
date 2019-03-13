import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    private employee: Employee[] = [];

    constructor() {
    }

    getEmployee(): Employee[] {
        return this.employee;
    }

    addEmployee(newEmp: Employee) {
        return this.employee.push(newEmp);
    }
}
