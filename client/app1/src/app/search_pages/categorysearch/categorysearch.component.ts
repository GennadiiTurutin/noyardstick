import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorysearch',
  templateUrl: './categorysearch.component.html',
  styleUrls: ['./categorysearch.component.css']
})
export class CategorysearchComponent implements OnInit {
  category: Observable<any>
  id: string;
  posts = [];
  loading: boolean = true;
  p: number = 1;

  constructor(private api: ApiService,
              private route: ActivatedRoute,
              private router: Router) { 
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              }
   
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostsforCategory();
  }  

  getPostsforCategory = () => {
    this.api.getPostsforCategory(this.id).subscribe(
      data => {
        this.loading = false;
        this.category = data[0];
        console.log(this.category)
        }, 
      error => {
          this.loading = false;
          console.log(error)
        }
      )
  }
}
