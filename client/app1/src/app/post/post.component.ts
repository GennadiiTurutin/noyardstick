import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, Observer } from 'rxjs';
import { PageEvent } from "angular-material";
import { MatPaginatorModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

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
  totalPosts = 10;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10]

  
  constructor (private api: ApiService ) { }
   
  ngOnInit() {
     this.getPosts();
  }

  getPosts = () => {
    this.api.getPosts().subscribe(
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

  onChangedPage(pageData: PageEvent) {
    console.log(pageData);
  }
}

