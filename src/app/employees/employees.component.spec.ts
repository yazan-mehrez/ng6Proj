import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeesComponent} from './employees.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {EmployeesService} from './employees.service';

describe('EmployeesComponent', () => {
    let component: EmployeesComponent;
    let fixture: ComponentFixture<EmployeesComponent>;

    beforeEach(async(() => {
        const emps = [{Id: 1, FirstName: 'Abdallah', LastName: 'Youssef', Gender: 'Male', Birthdate: new Date(1990, 5, 6)},
            {Id: 1, FirstName: 'Mona', LastName: 'Hamed', Gender: 'Female', Birthdate: new Date(1991, 5, 7)}];

        let serviceStub = {getEmployee: () => emps};
        TestBed.configureTestingModule({
            declarations: [EmployeesComponent],
            providers: [{provide: APP_BASE_HREF, useValue: '/'},
                {provide: EmployeesService, useValue: serviceStub}]
        }).compileComponents();
    }));

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
