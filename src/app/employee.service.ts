import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL = "https://dummy.restapiexample.com/api/v1/employees" // rate limited
  URL2 = "/assets/employees.json"
  constructor(private http:HttpClient) { }
  
  getEmployees():Observable<any> {
    return this.http.get<any>(this.URL2);
  }
}


