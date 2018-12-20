import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import  { SignindialogComponent } from '../auth/signindialog/signindialog.component';
import { SubscriptionComponent } from '../subscription/subscription.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, 
    private router: Router,
    private globalService: GlobalService,
    public dialog: MatDialog) { 
    }


  ngOnInit() { }

  openDialog(): void {
    let dialogRef = this.dialog.open(SignindialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed()
  }

  openSubscriptionDialog(): void {
    let dialogRef = this.dialog.open(SubscriptionComponent, {
      width: '400px'
    });
    dialogRef.afterClosed()
  }

  

}

