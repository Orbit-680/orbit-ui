import { BugsService } from './bugs/bugs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private bugsService: BugsService) {

  }

  ngOnInit() {
    console.log('AppComponent ngOnInit');
    // this.getBugs();
  }

  getBugs() {
    this.bugsService.getAllBugs().subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error)
    );
  }
}
