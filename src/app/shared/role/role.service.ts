import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { CheckRole } from './check-role.model';

@Injectable()
export class RoleService {
  public hasAdminRole: boolean;
  constructor(public http: Http) {

  }

  public checkAdminRole(uid: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/has-admin-role/' + uid)
      .map((response: Response) => {
        const checkRole = new CheckRole();
        checkRole.map(response.json());
        this.hasAdminRole = checkRole.hasRole;
      });
  }
}
