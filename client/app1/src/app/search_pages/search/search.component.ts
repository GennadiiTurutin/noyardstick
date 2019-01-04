import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: Observable<any>;
  id: string;
  loading: boolean = true;
  p: number = 1;

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
  

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.searchPosts(this.id)
  }

  searchPosts(q: string)  { 
    this.api.searchPosts(q).subscribe(
      data => {
        this.loading = false;
        this.posts = data;
        },
      error => {
          this.loading = false;
          console.log(error)}
      )
    } 
}