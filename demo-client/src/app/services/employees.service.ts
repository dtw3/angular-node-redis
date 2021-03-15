import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpClient
  ) { }

  public getEmployeesList(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/employee/list');
  }

  public deleteEmployee(employeeId: number): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/employee/delete', { employeeId });
  }

  public getEmployeeById(employeeId: number): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/employee/queryById', { employeeId });
  }

  public updateInsertEmployee(employee: Employee): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/employee/add', { employee });
  }
}
