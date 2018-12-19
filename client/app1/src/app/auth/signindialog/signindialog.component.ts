import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signindialog',
  templateUrl: './signindialog.component.html',
  styleUrls: ['./signindialog.component.css'],
  providers: [UserService]
})

export class SignindialogComponent implements OnInit {

  userLogin: FormGroup;
  loading: boolean;

  constructor(public DialogRef: MatDialogRef<SignindialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private userService: UserService, 
              private router: Router,
              private globalService: GlobalService,
              public dialog: MatDialog ) { }

  ngOnInit() {
    this.loading = false;
    if (localStorage.getItem('token') && localStorage.getItem('account')) {
      this.globalService.me = JSON.parse(localStorage.getItem('account'));
      console.log(this.globalService.me)
    }
  }

  loginUser() {
    this.loading = true;
    this.userService.loginUser(this.userLogin.value).subscribe(
      response => {
        this.loading = false;
        localStorage.setItem('token', response['token']);
        this.globalService.me = response['user'];
        this.router.navigate(['/']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

  onCloseCancel(): void {
    this.DialogRef.close();
  }

}
