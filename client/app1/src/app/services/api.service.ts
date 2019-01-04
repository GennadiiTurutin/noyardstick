import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/toPromise';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class ApiService {
  
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseurl: string = environment.apiUrl;

  constructor(private http: HttpClient,
              public dialog: MatDialog ) { }

  getPosts(): Observable<any> {return this.http.get(this.baseurl + '/posts/')}

  getComments(): Observable<any> {return this.http.get(this.baseurl + '/comments/')}

  getCommentsDetail(): Observable<any> {return this.http.get(this.baseurl + '/_comments/')}

  getPost(id: number): Observable<any> {return this.http.get(this.baseurl + '/posts/' + id + '/')}

  getTags(): Observable<any> {return this.http.get(this.baseurl + '/tags/')}

  getCategories(): Observable<any> {return this.http.get(this.baseurl + '/categories/')}

  getArchive(): Observable<any> {return this.http.get(this.baseurl + '/archive/')}

  getPostsforArchive(year:string, month:string): Observable<any> {
    return this.http.get(this.baseurl + '/archive/search/' + year + '/' + month )
  }
  postComment(comment): Observable<any> {
    return this.http.post(this.baseurl + '/comments/', comment, this.getAuthHeaders())
  }

  getPostsforTag(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/tags/search/' + id + '/')
  }

  getPostsforCategory(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/category/search/' + id + '/')
  }

  getLongReads(): Observable<any> {
    return this.http.get(this.baseurl + '/posts/long')
  }

  getImportant(): Observable<any> {
    return this.http.get(this.baseurl + '/posts/important')
  }
 
  searchPosts(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/posts/?search=' + id )
  }

  postSubscriber(subscriber): Observable<any> {
    return this.http.post(this.baseurl + '/subscribers/', subscriber)};

  deleteSubscriber(id:string): Observable<any> {
      return this.http.delete(this.baseurl + '/subscribers/' + id + '/')}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }
  
}

