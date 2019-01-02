import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  comments; 

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments = () => {
    this.api.getCommentsDetail().subscribe(
      data => {
        this.comments = data;
      }, 
      error => {
        console.log(error)        
      }
    )
  }
}
