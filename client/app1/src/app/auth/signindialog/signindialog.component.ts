import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-signindialog',
  templateUrl: './signindialog.component.html',
  styleUrls: ['./signindialog.component.css'],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ]
})
export class SignindialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<SignindialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
