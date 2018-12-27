import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';


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
              private userService: UserService, 
              private fb: FormBuilder,
              private globalService: GlobalService,
              public dialog: MatDialog ) { 

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
        this.Close()
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

  Close(): void {
    this.DialogRef.close();
  }

}
