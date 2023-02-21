import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(private  auth: AuthService, private router:Router) { }

  canActivate(route: any, state: RouterStateSnapshot){
    return this.auth.user$.pipe(
      map(user =>{
      if(user) return true;
      
      this.router.navigate(['/login'],{ queryParams: {returnUrl: state.url}});
      return false;
    })
    );
  }
}
