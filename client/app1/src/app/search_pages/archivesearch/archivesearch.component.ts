import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archivesearch',
  templateUrl: './archivesearch.component.html',
  styleUrls: ['./archivesearch.component.css']
})
export class ArchivesearchComponent implements OnInit {
  category: Observable<any>
  year: string;
  month: string;
  archive = [];
  loading: boolean = true;
  p: number = 1;

  constructor(private api: ApiService,
              private route: ActivatedRoute,
              private router: Router) { 
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
        console.log(this.archive)
        }, 
      error => {
          this.loading = false;
          console.log(error)
        }
      )
  }
}