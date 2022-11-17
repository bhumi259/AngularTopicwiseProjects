import { Component } from '@angular/core';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showFiller = false;

  constructor(private auth:AuthService){}
  logout(): void{
    this.auth.logout();
      }
}
