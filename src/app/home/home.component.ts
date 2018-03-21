import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessagesService } from '../shared/validation-messages/validation-messages.service';
import { AuthService } from '../shared/auth/auth.service';
import { environment } from '../../environments/environment';
import { RoleService } from '../shared/role/role.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public footerMessage: string;
  public isSubmitted: boolean;
  public loginForm: FormGroup;
  public firebaseErrorMessage: string;
  public loginFailed: boolean;
  public userDetails: any;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private roleService: RoleService) {
                this.isSubmitted = false;
                this.loginFailed = false;
                this.loginForm = this.formBuilder.group({
                  'email': ['', [Validators.required, ValidationMessagesService.emailValidator]],
                  'password': ['', [Validators.required]]
                });
                this.authService.userSubject.subscribe((userDetails) => {
                  this.roleService.checkAdminRole(this.userDetails.uid).subscribe();
                });
  }

  public ngOnInit() {
    console.log('HomeComponent ngOnInit');
    this.footerMessage = '© Orbit ' + new Date().getFullYear();
    console.log('Current environment:', environment.envName);
  }

  public logout() {
    this.authService.logout();
  }

  public submitForm() {
    this.loginFailed = false;
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.isSubmitted = true;
      const email = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;

      this.authService.signInRegular(email, password).then((res) => {
          this.isSubmitted = false;
          if (this.roleService.hasAdminRole) {
            console.log('Successfully logged in: ', res);
            this.router.navigate(['tickets']);
          }else {
            this.loginFailed = true;
            this.firebaseErrorMessage = 'You do not have permissions to use this system.';
            this.authService.logout();
            this.userDetails = null;
          }
        }).catch((err) => {
          console.error('Error occurred when logging in: ', err);
          this.isSubmitted = false;
          this.loginFailed = true;
          this.firebaseErrorMessage = err.message;
        });
      }
    }
}
