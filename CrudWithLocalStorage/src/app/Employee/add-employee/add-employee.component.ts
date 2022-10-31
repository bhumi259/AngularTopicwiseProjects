import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  checkForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private employeeService:EmployeeService,
    private router:Router,
    private formBuilder:FormBuilder) {
     this.checkForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      id: 0,
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
     })
     }

     get name(){
      return this.checkForm.get('name');
     }


    employeeList: Employee[] = [];


  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployees()
  }

  onSubmit(){
    if(this.checkForm.valid){
      var item = this.employeeService.getEmployees();
      console.log(this.checkForm.value);
      let a = this.checkForm.value;;
      this.employeeList.push(a);
      this.router.navigate(['/employee-list']);
    } else{
      this.formSubmitted = true;
    }
  }
}
