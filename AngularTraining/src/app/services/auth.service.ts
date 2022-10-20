import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(){
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
}
