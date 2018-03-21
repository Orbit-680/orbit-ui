import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { RoleService } from '../role/role.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, public roleService: RoleService) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn() && this.roleService.hasAdminRole) {
      return true;
    }else {
      this.router.navigate(['home']);
      return false;
    }
  }

}
