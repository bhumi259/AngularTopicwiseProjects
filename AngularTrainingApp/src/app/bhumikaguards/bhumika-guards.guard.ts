import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BhumikaAuthService } from '../bhumikaServices/bhumika-auth.service';

@Injectable({
  providedIn: 'root'
})
export class BhumikaGuardsGuard implements CanActivate {

  constructor(private router: Router, private auth: BhumikaAuthService) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['/login']);
        return false;
      }
      return this.auth.isLoggedIn();
    }
  
}
