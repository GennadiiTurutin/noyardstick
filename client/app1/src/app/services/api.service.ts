import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SubscriptionComponent } from '../popups/subscription/subscription.component';
import { MatDialog } from '@angular/material';
import  { SignindialogComponent } from '../auth/signindialog/signindialog.component';
import 'rxjs/Rx';
import { ContactComponent } from '../popups/contact/contact.component';

@Injectable()
export class ApiService {
  
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseurl: string = environment.apiUrl;

  constructor(private http: HttpClient,
              public dialog: MatDialog ) { }

  getPosts(): Observable<any> {return this.http.get(this.baseurl + '/posts/')}
 
  getComments(): Observable<any> {return this.http.get(this.baseurl + '/comments/')}

  getPost(id: number): Observable<any> {return this.http.get(this.baseurl + '/posts/' + id + '/')}

  getTags(): Observable<any> {return this.http.get(this.baseurl + '/tags/')}

  getCategories(): Observable<any> {return this.http.get(this.baseurl + '/categories/')}

  postComment(comment): Observable<any> {
    return this.http.post(this.baseurl + '/comments/', comment, this.getAuthHeaders())
  }

  getPostsforTag(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/tags/search/' + id + '/')
  }

  getPostsforCategory(id:string): Observable<any> {
    return this.http.get(this.baseurl + '/categories/search/' + id + '/')
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

  openDialog(): void {
    let dialogRef = this.dialog.open(SignindialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed()
  }

  openSubscriptionDialog(): void {
    let dialogRef = this.dialog.open(SubscriptionComponent, {
      width: '400px',
      disableClose: false
    });
    dialogRef.afterClosed()
  }

  openContact(): void {
    let dialogRef = this.dialog.open(ContactComponent, {
      width: '400px',
      disableClose: false
    });
    dialogRef.afterClosed()
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }
  
}

