import { Response } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { RoleService } from '../role/role.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AdminRoleGuardService implements CanActivate {

    constructor(private router: Router,
                private roleService: RoleService,
                private authService: AuthService) {}


    public canActivate(): Observable<any>|any {
        if (!this.authService.userDetails) {
            return false;
        }

        return this.roleService.checkAdminRole(this.authService.userDetails.uid)
            .subscribe((response) => {
                console.log('user has admin role: ' + this.roleService.hasAdminRole);
                return this.roleService.hasAdminRole;
        });
    }
}
