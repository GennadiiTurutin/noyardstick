import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-archivesearch',
  templateUrl: './archivesearch.component.html',
  styleUrls: ['./archivesearch.component.css']
})
export class ArchivesearchComponent implements OnInit {
  category: Observable<any>
  year: string;
  month: string;
  archive: any;
  loading: boolean = true;
  p: number = 1;

  constructor(public api: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { 
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              }
   
  ngOnInit() {
    this.year = this.route.snapshot.paramMap.get('year');
    this.month = this.route.snapshot.paramMap.get('month');
    this.getPostsforArchive();
  }  

  getPostsforArchive = () => {
    this.api.getPostsforArchive(this.year, this.month).subscribe(
      data => {
        this.loading = false;
        this.archive = data[0];
        }, 
      error => {
          this.loading = false;
          console.log(error)
          this.toastr.error('Error', "Archive not found" );
          this.router.navigate(['/']);
        }
      )
  }
}