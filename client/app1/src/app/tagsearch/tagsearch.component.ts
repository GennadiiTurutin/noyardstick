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
  id: string;
  posts = [];

  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute) { }
    
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostsforTag();
  }   

  getPostsforTag = () => {
    this.api.getPostsforTag(this.id).subscribe(
      data => {
        this.tag = data[0];
        console.log(this.tag)
        }, 
        error => {
          console.log("ERROR")
          console.log(this.tag)
        }
      )
  }

}
