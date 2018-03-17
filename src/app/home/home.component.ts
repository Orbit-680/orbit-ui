import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public footerMessage: string;

  constructor() { }

  ngOnInit() {
    console.log('HomeComponent ngOnInit');
    this.footerMessage = "© Obrit " + new Date().getFullYear();
  }

}
