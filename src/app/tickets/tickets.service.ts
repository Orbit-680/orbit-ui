import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class TicketsService {

  constructor(public http: Http) {

  }

  getAllTickets(): Observable<any> {
    return this.http.get(environment.apiUrl + '/all-tickets')
      .map((response: Response) => response.json());
  }


}
