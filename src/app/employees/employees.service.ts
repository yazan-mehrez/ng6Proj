import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

const maxDuration = 5000;

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    cacheTime: number = 0;
    current = Date.now();
    private cache$: Observable<any>;

    constructor(private http: HttpClient) {
    }

    fetchEmployee(): Observable<any> {
        return this.http.get('http://w36303-16/CompanyWebApi/api/Employees');
    }

    getEmployee(): Observable<any> {
        if (!this.cache$ || ((this.current - this.cacheTime) > maxDuration)) {
            this.cache$ = this.fetchEmployee().pipe(shareReplay(1));
            this.cacheTime = Date.now();
        }
        return this.cache$;
    }

}
