import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  tags = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getTags();
    //(<any>window).twttr.widgets.load();
  }

  getTags = () => {
    this.api.getTags().subscribe(
      data => { 
        this.tags = data;
      }, 
      error => {
        console.log(error)
      }
    )
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();}
}
