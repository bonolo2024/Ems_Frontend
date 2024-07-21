import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor( private httpClient: HttpClient ) { }

  private baseURL = "http://localhost:8085/api/v1/employees";

  getEmployeesByAdminId(adminid: number): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/all/${adminid}`)
  }

  getAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/`)
  }

  //Not yet Tested
  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, employee);
  }

  getEmployeeById(employeeId: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${employeeId}`);
  }

  updateEmployee(employeeId: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${employeeId}`, employee);
  }

  deleteEmployee(employeeId: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${employeeId}`);
  }


}
