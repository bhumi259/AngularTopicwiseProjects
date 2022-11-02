import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  modalTitle:string = '';
  activateAddEditEmployeeComponent:boolean = false;
  employee:any;

  employeeList$!:Observable<any[]>;

  constructor(private service:EmployeeService) { }


  ngOnInit(): void {
    this.employeeList$ = this.service.getEmployeeList();
  }


  modalAdd() {
    this.employee = {
      id:0,
      name:null,
      gender:null,
      salary:null
    }
    this.activateAddEditEmployeeComponent = true;
    
  }

  modalEdit(item:any) {
  
     this.employee = item;
     console.log("employee",this.employee);
     this.activateAddEditEmployeeComponent = true;
  }
  
  modalClose() {
    this.activateAddEditEmployeeComponent = false;
    this.employeeList$ = this.service.getEmployeeList();
  }
  
  delete(item:any) {
    if(confirm(`Are you sure you want to delete inspection ${item.id}`)) {
      this.service.deleteEmployee(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      
      this.employeeList$ = this.service.getEmployeeList();
      })
    }
  }
  
}
