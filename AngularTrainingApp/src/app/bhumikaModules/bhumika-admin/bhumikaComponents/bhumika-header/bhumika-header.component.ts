import { Component, OnInit } from '@angular/core';
import { BhumikaAuthService } from 'src/app/bhumikaServices/bhumika-auth.service';

@Component({
  selector: 'app-bhumika-header',
  templateUrl: './bhumika-header.component.html',
  styleUrls: ['./bhumika-header.component.css']
})
export class BhumikaHeaderComponent implements OnInit {

  constructor(private auth: BhumikaAuthService) { }

  ngOnInit(): void {
  }

  logout(): void{
this.auth.logout();
  }

  // constructor(private auth: AuthService) {}

  // ngOnInit(): void {}

  // logout(): void {
  //   this.auth.logout();
  // }

}
