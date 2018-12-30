import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { TruncatePipe } from '../pipes/truncate';
import {Subscription} from 'rxjs/Subscription';

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
  userSub: Subscription;
  

  
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

