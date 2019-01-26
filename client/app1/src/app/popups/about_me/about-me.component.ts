import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  loading: boolean;
  constructor(public DialogRef: MatDialogRef<AboutMeComponent>,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loading = false;
  }
  Close(): void {
    this.DialogRef.close();
  }
}