import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class BugsService {

  constructor(public http: Http) {}

  getAllBugs(): Observable<any> {
    return this.http.get('http://localhost:8080' + '/all-students')
      .map((response: Response) => response.json());
  }


}
