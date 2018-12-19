import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags = [];

  constructor(private api: ApiService) { 
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

  ngOnInit() {}
}
