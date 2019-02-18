import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs/Subscription';
import { GlobalService } from 'src/app/services/global.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from "rxjs/Rx";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [DatePipe, ApiService]
})
export class PostDetailComponent implements OnInit {
  userComment: FormGroup;
  id: number;
  post: Observable<any>;
  params;
  loading: boolean = false;
  pageId = 'https://noyardstick.herokuapp.com/posts/'
  
  
  constructor(private api: ApiService, 
              private route: ActivatedRoute, 
              private fb: FormBuilder,
              private router: Router,
              private globalService: GlobalService,
              private toastr: ToastrService) {}

  ngOnInit() {
    
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.pageId = this.pageId + this.id;
        }
      )

    this.api.getPost(this.id).subscribe(
        data => { 
            this.post = data;
        }, 
        error => {
          console.log(error)
          this.toastr.error('Error', "Post not found" );
          this.router.navigate(['/']);
        }
      )
  }
 
}




