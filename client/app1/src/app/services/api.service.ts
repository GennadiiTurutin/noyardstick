import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseurl: string = environment.apiUrl;

  constructor(private http: HttpClient ) { }

  getPosts(): Observable<any> {return this.http.get(this.baseurl + '/posts/')}
 
  getComments(): Observable<any> {return this.http.get(this.baseurl + '/comments/')}

  getPost(id: number): Observable<any> {return this.http.get(this.baseurl + '/posts/' + id + '/')}

  getTags(): Observable<any> {return this.http.get(this.baseurl + '/tags/')}

  postComment(comment): Observable<any> {
    return this.http.post(this.baseurl + '/comments/', comment, this.getAuthHeaders())
  }

  getPostsforTag(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/tags/search/' + id + '/')
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }
  
}

