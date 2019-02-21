import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

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
              private router: Router,
              private toastr: ToastrService,
              private titleService: Title) { 
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              }
   
  ngOnInit() {
    this.titleService.setTitle('Category')
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostsforCategory();
  }  

  getPostsforCategory = () => {
    this.api.getPostsforCategory(this.id).subscribe(
      data => {
        if (data.length > 0 ){
          this.loading = false;
          this.category = data[0];
        } 
        else {
          console.log("Category doesn't exist");
          this.toastr.error('Error', "Sorry, not found! Where did you see this category?" );
          this.router.navigate(['/']);
          setTimeout(()=>{  
            this.toastr.info('Info', "You may try our search field!" );
          }, 4000);
        } 
      },
      error => {
          this.loading = false;
          console.log(error);
        }
      )
  }
}
