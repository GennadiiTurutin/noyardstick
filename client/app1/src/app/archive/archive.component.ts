import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit{
  archives;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getArchive();
 }
  

  getArchive = () => {
  this.api.getArchive().subscribe(
    data => { 
      this.archives = data;
      console.log(this.archives)
    }, 
    error => {
      console.log(error)
    })
  }
}
