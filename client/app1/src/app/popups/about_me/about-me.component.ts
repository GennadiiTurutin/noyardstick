import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  loading: boolean;
  constructor(public DialogRef: MatDialogRef<AboutMeComponent>,
    public dialog: MatDialog,
    private titleService: Title) { }

  ngOnInit() {
    this.loading = false;
    
  }
  Close(): void {
    this.DialogRef.close();
  }
}