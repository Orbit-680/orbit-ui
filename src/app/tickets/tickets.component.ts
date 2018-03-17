import { Component, OnInit } from '@angular/core';
import { TicketsService } from './tickets.service';
import { Router } from '@angular/router';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  public ticketsLoading: boolean;
  public ticketList: Array<Ticket>;

  constructor(private ticketsService: TicketsService,
              private router: Router) {

  }

  public ngOnInit() {
    console.log('TicketsComponent ngOnInit');
    this.ticketsLoading = true;
    this.getTickets();
  }

  public getTickets() {
    this.ticketsService.getAllTickets().subscribe(
      data => {
        this.ticketList = data;
        this.ticketsLoading = false;
      },
      error => console.error(error)
    );
  }

  public navigateHome(){
    this.router.navigate(['home']);
  }

}
