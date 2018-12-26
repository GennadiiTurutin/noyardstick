import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  tags = [];
  posts = [];
  data = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getTags()
  }

  getTags = () => {
    this.api.getTags().subscribe(
      data => { 
        this.tags = data;
      }, 
      error => {
        console.log(error)
      }
    )
  }
}
