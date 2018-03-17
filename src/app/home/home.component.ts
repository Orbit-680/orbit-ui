import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessagesService } from '../shared/validation-messages/validation-messages.service';

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
                  'email': ['', [Validators.required, ValidationMessagesService.emailValidator]],
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
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.isSubmitted = true;
      alert(`Email: ${this.loginForm.value.email}`);
      this.router.navigate(['tickets']);
    }
  }

}
