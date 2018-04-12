import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public footerMessage: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.footerMessage = '© Orbit ' + new Date().getFullYear();
  }

  public navigateHome(){
    this.router.navigate(['home']);
  }

}
