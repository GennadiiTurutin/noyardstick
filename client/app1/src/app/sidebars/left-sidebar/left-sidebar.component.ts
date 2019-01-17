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
  }

  getImportantPosts = () => {
      this.api.getImportant().subscribe(
        data => { 
          this.posts_important = data;
        }, 
        error => {
          console.log(error)
        }
      )
    }

  ngOnInit() { }

}
