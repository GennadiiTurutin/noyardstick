import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { TruncatePipe } from '../pipes/truncate';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ApiService]
})
export class PostComponent implements OnInit{
  posts;
  tags = [];
  data = [];
  p: number = 1;
  loading: boolean = true;

  
  constructor (private api: ApiService) { }
  
  ngOnInit() {
     this.getPosts();
  }

  getPosts = () => {
    this.api.getPosts().subscribe(
      data => {
        this.loading = false; 
        this.posts = data;
        console.log(this.posts)  
      }, 
      error => {
        this.loading = false;
        console.log(error)       
      }
    )
  }
}



