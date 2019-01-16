import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient ) { }

  registerNewUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + '/api/users/', userData)
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + '/authenticate/', userData)
  }

  isLoggedIn() {
    if (localStorage.getItem("token") == null) {
      return false
    }
    else {
      return true;
    }
  }
}
