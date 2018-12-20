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
  tag: Observable<any>
  id: number;
  posts = [];

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
    this.api.getPostsforTag(this.id).subscribe(
        data => { 
          this.tag = data;
          console.log(this.tag)
        }, 
        error => {
          console.log("ERROR")
          console.log(this.tag)
        }
      )
  }   
}
