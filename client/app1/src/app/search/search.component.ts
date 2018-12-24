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
  isInitiated: boolean;

  constructor(private api: ApiService, 
              private route: ActivatedRoute) { }
  
  

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.searchPosts(this.id)
    this.isInitiated = true;
  }

  searchPosts(q: string)  {
    this.api.searchPosts(q).subscribe(
      data => {
        this.posts = data;
        console.log(data)
        },
        error => {console.log(error)}
      )
    } 
}