import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tagsearch',
  templateUrl: './tagsearch.component.html',
  styleUrls: ['./tagsearch.component.css'],
  providers: [ApiService]

})
export class TagsearchComponent implements OnInit {
  tag: Observable<any>
  id: string;
  posts = [];
  loading: boolean = true;
  p: number = 1;

  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) { }
    
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostsforTag();
  }   

  getPostsforTag = () => {
    this.api.getPostsforTag(this.id).subscribe(
      data => {
        this.loading = false;
        this.tag = data[0];
        }, 
      error => {
        this.loading = false;
        console.log(error);
        }
      )
  }

}
