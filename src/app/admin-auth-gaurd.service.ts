import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from "rxjs/operators";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurd implements CanActivate {

  constructor(private auth: AuthService, private userService:UserService) { }

  canActivate(): Observable<boolean> {
    
    return this.auth.appUser$.pipe(
      map(appUser => appUser.isAdmin));
      

  }
}
