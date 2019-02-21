import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

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
              private toastr: ToastrService,
              private titleService: Title) { }
    
  ngOnInit() {
    this.titleService.setTitle('Tag')
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostsforTag();
  } 

  getPostsforTag = () => {
    this.api.getPostsforTag(this.id).subscribe(
        data => {
          if (data.length > 0 ){
            this.loading = false;
            this.tag = data[0];
            console.log(data);
          }
          else {
            console.log("Tag doesn't exist");
            this.toastr.error('Error', "Sorry, not found! Where did you see this tag?" );
            this.router.navigate(['/']);
            setTimeout(()=>{  
              this.toastr.info('Info', "You may try our search field!" );
            }, 4000);
          }
        },
        error => {
          this.loading = false;
          console.log(error);
        })
  }
}

