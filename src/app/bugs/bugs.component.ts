import { Component, OnInit } from '@angular/core';
import { BugsService } from './bugs.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  constructor(private bugsService: BugsService) {

  }

  ngOnInit() {
    console.log('BugsComponent ngOnInit');
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
