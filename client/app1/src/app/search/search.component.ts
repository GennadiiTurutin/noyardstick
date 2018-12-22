import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: Observable<any>;
  id: string;

  constructor(private api: ApiService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.searchPosts()

  }

  searchPosts = () => {
    this.api.searchPosts(this.id).subscribe(
      data => {
        this.posts = data;
        console.log(this.posts)
        },
        error => {
          console.log(error)
          console.log(this.posts)
        }
    )
  }
}