import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { RoleService } from '../role/role.service';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router,
              private roleService: RoleService,
              private angularFireAuth: AngularFireAuth) {}

  // canActivate(): boolean {
  //   debugger;
  //   if (!this.auth.isLoggedIn()) {
  //     this.router.navigate(['home']);
  //     return false;
  //   }
  //   return true;
  // }

  canActivate():Observable<boolean>|boolean {
    return this.angularFireAuth.authState.map((auth) => {
        if (auth) {
            console.log('authenticated');
            return true;
        }
        console.log('not authenticated');
        this.router.navigateByUrl('login');
        return false;
    }).first();
}
}
