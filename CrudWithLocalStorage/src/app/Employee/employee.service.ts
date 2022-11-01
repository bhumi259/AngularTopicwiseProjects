import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList : Employee[] =[
    {
      name: 'Bhumika',
      id: 0,
      gender: 'Female',
      salary: '2000000'
    }
  ];

  constructor(private router:Router) { }

  getEmployees(){
    return this.employeeList;
  }

  removeEmployee(id: number) {
    this.employeeList = this.employeeList.filter(x => x.id != id);
  }

  updateEmployee(Employee: Employee) {
    const userIndex = this.employeeList.findIndex(x => x.id == Employee.id);
    if (userIndex != null && userIndex != undefined) {
      this.employeeList[userIndex] = Employee;
    }
  }

  getEmployeesByID(id: number) {
    return this.employeeList.find(x => x.id == id)
  }
  
}
