import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

  constructor(private profileService:ProfileService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   return this.profileService.userDetails ? true: false;
  }
}
