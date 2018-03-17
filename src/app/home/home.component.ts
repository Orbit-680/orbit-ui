import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public footerMessage: string;

  constructor(private router: Router) { }

  public ngOnInit() {
    console.log('HomeComponent ngOnInit');
    this.footerMessage = "© Obrit " + new Date().getFullYear();
  }

  public viewBugsList(){
    this.router.navigate(['bugs']);
  }

}
