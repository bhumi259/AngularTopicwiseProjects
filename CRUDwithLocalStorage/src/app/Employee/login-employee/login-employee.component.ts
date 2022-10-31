import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  userName!: string;
   password!: string;
   formData!: FormGroup;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(){
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);

    this.authService.login(this.userName, this.password)
       .subscribe(data => {
          console.log("Is Login Success: " + data);
          if (data) {
             this.router.navigate(['/employee-list'])
                .then(() => {
                   window.location.reload();
                });
          }
       });
 }
}
