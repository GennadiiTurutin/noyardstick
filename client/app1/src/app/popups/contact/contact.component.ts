import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  loading: boolean;

  constructor(public DialogRef: MatDialogRef<ContactComponent>,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loading = false;
  }

  Close(): void {
    this.DialogRef.close();
  }

}

