import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  posts = [];
  
  constructor(private api: ApiService ) { 
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

  ngOnInit() {}


}
