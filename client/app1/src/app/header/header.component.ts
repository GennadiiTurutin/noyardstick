import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import  { SignindialogComponent } from '../auth/signindialog/signindialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserService, 
    private router: Router,
    private globalService: GlobalService,
    public dialog: MatDialog) { 
    }


  ngOnInit() { }

  openDialog(): void {
    let dialogRef = this.dialog.open(SignindialogComponent, {
      width: '400px',
      data: {username: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(data => {
      this.username = data.username;
      this.password = data.password;
    })
  }

  

}

