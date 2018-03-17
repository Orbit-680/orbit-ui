import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validation-messages.service';

@Component({
  selector: 'validation-messages',
  template: `<div class="text-danger" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ValidationMessagesComponent {
  public errorMessage: string;
  @Input() control: FormControl;
  constructor() { }

  public getErrorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }
}