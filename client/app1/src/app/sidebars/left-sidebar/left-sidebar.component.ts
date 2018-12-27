import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  posts_important = [];
  posts_long = [];

  constructor(private api: ApiService) {
    this.getImportantPosts();
    this.getLongReads();
  }

  getImportantPosts = () => {
      this.api.getImportant().subscribe(
        data => { 
          this.posts_important = data.results;
        }, 
        error => {
          console.log(error)
        }
      )
    }

  getLongReads = () => {
      this.api.getLongReads().subscribe(
        data => { 
          this.posts_long = data.results;
        }, 
        error => {
          console.log(error)
        }
      )
    }
  ngOnInit() { }

}
