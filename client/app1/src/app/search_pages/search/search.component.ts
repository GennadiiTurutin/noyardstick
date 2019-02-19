import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: any;
  id: string;
  loading: boolean = true;
  p: number = 1;

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { 
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
        if (data.length === 0 ) {
          this.toastr.info('Tips', "Nothing has been found! Try otherwise." );
        }  
        if (data.length > 4  ) {
          this.toastr.info('Tips', "Here are too many articles! Maybe you should be more specific?" );
        } 
      },
      error => {
          this.loading = false;
          console.log(error);
        }
      )
    } 
}
