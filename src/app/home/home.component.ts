import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../shared/validation-messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public footerMessage: string;
  public isSubmitted: boolean;
  public loginForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
                this.isSubmitted = false;
                this.loginForm = this.formBuilder.group({
                  'email': ['', [Validators.required, ValidationService.emailValidator]],
                  'password': ['', [Validators.required, Validators.minLength(10)]]
                });
  }

  public ngOnInit() {
    console.log('HomeComponent ngOnInit');
    this.footerMessage = "© Obrit " + new Date().getFullYear();
  }

  public viewTicketsList(){
    this.router.navigate(['tickets']);
  }

  public submitForm(){
    this.isSubmitted = true;

  }

}
