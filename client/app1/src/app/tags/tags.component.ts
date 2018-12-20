import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
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
