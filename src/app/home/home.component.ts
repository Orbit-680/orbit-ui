import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessagesService } from '../shared/validation-messages/validation-messages.service';
import { AuthService } from '../shared/auth/auth.service';

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

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
                this.isSubmitted = false;
                this.loginFailed = false;
                this.loginForm = this.formBuilder.group({
                  'email': ['', [Validators.required, ValidationMessagesService.emailValidator]],
                  'password': ['', [Validators.required]]
                });
  }

  public ngOnInit() {
    console.log('HomeComponent ngOnInit');
    this.footerMessage = "© Obrit " + new Date().getFullYear();
  }

  public submitForm(){
    this.loginFailed = false;
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.isSubmitted = true;
      const email = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;

      this.authService.signInRegular(email, password).then((res) => {
          console.log('Successfully logged in: ', res);
          this.isSubmitted = false;
          this.router.navigate(['tickets']);
        }).catch((err) => {
          console.error('Error occurred when logging in: ', err);
          this.isSubmitted = false;
          this.loginFailed = true;
          this.firebaseErrorMessage = err.message;
        });
      }
    }
}
