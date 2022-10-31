import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employeeList: Employee[]=[];

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(){
    this.employeeList = this.employeeService.getEmployees();
  }

  remove(id: number) {
    this. employeeService.removeEmployee(id);
    this.employeeList = this.employeeService.getEmployees();
  }
}
