import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatDialogModule } from '@angular/material'

import  { SignindialogComponent } from '../signindialog/signindialog.component';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]
})
export class SigninComponent implements OnInit {

  userLogin: FormGroup;
  loading: boolean;

  dialogResult = "";

  constructor(private userService: UserService, 
              private fb: FormBuilder,
              private router: Router,
              private globalService: GlobalService,
              public dialog: MatDialog) { 
              
              this.userLogin = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required]
                });
              }

  ngOnInit() {
    this.loading = false;
    if (localStorage.getItem('token') && localStorage.getItem('account')) {
      this.globalService.me = JSON.parse(localStorage.getItem('account'));
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

  openDialog() {
    let dialogRef = this.dialog.open(SignindialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}');
      this.dialogResult = result;
    })

  }
}

