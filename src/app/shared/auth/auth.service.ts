import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { RoleService } from '../role/role.service';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User;
  private _userSubject = new Subject<firebase.User>();
  public userSubject = this._userSubject.asObservable();

  constructor(private _firebaseAuth: AngularFireAuth,
              private router: Router,
              private roleService: RoleService) {
    this.user = _firebaseAuth.authState;

    this.user.subscribe((user) => {
        if (user) {
          this.userDetails = user;
          this._userSubject.next(this.userDetails);
        }else {
          this.userDetails = null;
        }
    });
  }

  public signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._firebaseAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
  }

  public isLoggedIn() {
    if (!this.userDetails) {
        return false;
    } else {
        return true;
    }
  }

  public logout() {
      this._firebaseAuth.auth.signOut().then((res) => {
        this.userDetails = null;
        this._userSubject.next(this.userDetails);
        this.router.navigate(['home']);
      });
  }
}
