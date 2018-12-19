import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  posts = [];

  constructor(private api: ApiService) {
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

  ngOnInit() { }

}
