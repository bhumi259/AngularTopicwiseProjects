import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly inspectionAPIUrl = "https://localhost:7032/api";

  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Employees');
  }

  addEmployee(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Employees', data);
  }

  updateEmployee(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Employees/${id}`, data);
  }

  deleteEmployee(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Employees/${id}`);
  }
}
