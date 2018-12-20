import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, Observer } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tagsearch',
  templateUrl: './tagsearch.component.html',
  styleUrls: ['./tagsearch.component.css'],
  providers: [ApiService]

})
export class TagsearchComponent implements OnInit {
  posts: Observable<any>
  tags = [];
  data = [];
  id: number;

  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      )
    this.getPostsforTag();
  }

  getPostsforTag = () => {
    this.api.getPostsforTag(this.id).subscribe(
      data => { 
        this.posts = data;
      }, 
      error => {
        console.log(error)
      }
    )
  }
}
