import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeList$!: Observable<any[]>;
  
  constructor(private service: EmployeeService) { }

  @Input() employee: any;
  id: number = 0;
  name: string = "";
  gender: string = "";
  salary: string = "";

  ngOnInit(): void {
    this.id = this.employee.id;
    this.name = this.employee.name;
    this.gender = this.employee.gender;
    this.salary = this.employee.salary;
    this.employeeList$ = this.service.getEmployeeList();
  }

  addEmployee(){
    var employee = {
      id: this.id,
      name: this.name,
      gender: this.gender,
      salary: this.salary,
    }
    this.service.addEmployee(employee).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateEmployee() {
    var employee = {
      id: this.id,
      name: this.name,
      gender: this.gender,
      salary: this.salary,
    }
    var id: number = this.id;
    this.service.updateEmployee(id, employee).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      
      setTimeout(function () {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })
  }


}
      
