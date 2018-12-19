import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import  { SignindialogComponent } from '../signindialog/signindialog.component';

export interface DialogData {
  user: string;
  name: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]
})
export class SigninComponent implements OnInit {
  
  userLogin: FormGroup;
  loading: boolean;
  
  email: string;
  password: string;

  constructor(private userService: UserService, 
              private router: Router,
              private globalService: GlobalService,
              public dialog: MatDialog) { 
              }

  ngOnInit() {
    //this.loading = false;
    //if (localStorage.getItem('token') && localStorage.getItem('account')) {
    //  this.globalService.me = JSON.parse(localStorage.getItem('account'));
    }
  }
  /*
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
  */
  
  /*
  openDialog(): void {
    let dialogRef = this.dialog.open(SignindialogComponent, {
      width: '400px',
      data: {email: this.email, password: this.password}
    });

    dialogRef.afterClosed().subscribe(data => {
      this.email = data.email;
      this.password = data.password;
    })

  }
  */


