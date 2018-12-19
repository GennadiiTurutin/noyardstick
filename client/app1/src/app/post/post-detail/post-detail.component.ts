import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/models/user';
import { Comment } from 'src/app/models/comment';
import { Subscription } from 'rxjs/Subscription';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from '../../services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from "rxjs/Rx"


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [DatePipe, UserService, ApiService]
})
export class PostDetailComponent implements OnInit {
  userComment: FormGroup;
  id: number;
  post: Observable<any>;
  comment;
  params;
  loading: boolean;
  
  
  constructor(private api: ApiService, 
              private route: ActivatedRoute, 
              private fb: FormBuilder,
              private router: Router,
              private globalService: GlobalService,
              private userService: UserService) {


               }
  
  account: User = new User();
  userSub: Subscription;

  ngOnInit() {
    this.loading = false;
    this.userSub = this.globalService.user.subscribe(
      me => this.account = me
    );  
    if ( localStorage.getItem('token') && localStorage.getItem('account')) {
      this.globalService.me = JSON.parse(localStorage.getItem('account'));  
    }

    this.userComment = this.fb.group({
      content: ['', Validators.required],
      author: ['http://127.0.0.1:8000/users/' + this.account.id + '/'],
      date_posted: [new Date()],
      post: ['http://127.0.0.1:8000' + this.router.url + '/']
    });
    
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      )

    this.api.getPost(this.id).subscribe(
        data => { 
          this.post = data;
        }, 
        error => {
          console.log(this.post)
        }
      )
  }

  postComment() {
    this.loading = true;
    this.api.postComment(this.userComment.value).subscribe(
        response => {
          this.loading = false;
          console.log(response)
        },
        error => {
          this.loading = false;
          console.log(error)
          console.log(this.userComment.value)
        }
    );
  }
}




