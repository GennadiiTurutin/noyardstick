import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseurl: string = environment.apiUrl;

  constructor(public http: HttpClient,
              public dialog: MatDialog ) { }

  getPosts(): Observable<any> {return this.http.get(this.baseurl + '/api/posts/')}

  getPost(id: number): Observable<any> {return this.http.get(this.baseurl + '/api/posts/' + id + '/')}

  getTags(): Observable<any> {return this.http.get(this.baseurl + '/api/tags/')}

  getCategories(): Observable<any> {return this.http.get(this.baseurl + '/api/categories/')}

  getArchive(): Observable<any> {return this.http.get(this.baseurl + '/api/archive/')}

  getPostsforArchive(year:string, month:string): Observable<any> {
    return this.http.get(this.baseurl + '/api/archive/search/' + year + '/' + month )
  }

  getPostsforTag(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/api/tags/search/' + id + '/')
  }

  getPostsforCategory(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/api/category/search/' + id + '/')
  }

  getImportant(): Observable<any> {
    return this.http.get(this.baseurl + '/api/posts/important')
  }
 
  searchPosts(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/api/posts/?search=' + id )
  }

  postSubscriber(subscriber): Observable<any> {
    return this.http.post(this.baseurl + '/api/subscribers/', subscriber)
  };

  deleteSubscriber(id:string): Observable<any> {
      return this.http.delete(this.baseurl + '/api/subscribers/' + id + '/')}

  private getAuthHeaders() {
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8'});
    return { headers: httpHeaders};
  }
  
}

