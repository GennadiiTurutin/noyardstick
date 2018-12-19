import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ApiService]
})
export class PostComponent implements OnInit{
  posts: Observable<any>
  tags = [];
  data = [];

  
  constructor (private api: ApiService ) { }
   

  ngOnInit() {
     this.getPosts();
  }

  getPosts = () => {
    this.api.getPosts().subscribe(
      data => { 
        this.posts = data;
      }, 
      error => {
        console.log(error)
      }
    )
  }
}

