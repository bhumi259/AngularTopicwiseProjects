import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id: number = 0;
  checkForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      id: [0,[Validators.required]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.checkForm.get('id')?.setValue(params['id']);
        const data = this.employeeService.getEmployeesByID(this.id);
        if (data) {
          this.checkForm.setValue(data);
        }
      }
    });
  }
  
  save() {
    if (this.checkForm.valid) {
      this.employeeService.updateEmployee(this.checkForm.value);
      this.router.navigate(['/employee-list']);
    }
    else {
      this.formSubmitted = true;
    }
  }
}
