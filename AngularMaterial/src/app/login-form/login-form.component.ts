import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  profileForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:[''],
  });

  hide = true;

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['home']);
    }
  }

  constructor(private fb: FormBuilder, private auth:AuthService,private router: Router) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    if(this.profileForm.valid){
      this.auth.login(this.profileForm.value).subscribe(
        (result)=>{
          console.log(result);
          this.router.navigate(['/home']);
        },
        (err: Error) => {
          alert(err.message);
        }
      )
    }
  }
}
