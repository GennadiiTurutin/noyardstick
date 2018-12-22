import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import  { SignindialogComponent } from '../auth/signindialog/signindialog.component';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {
  searchvalue: FormGroup;
  posts: Observable<any>;

  constructor(private userService: UserService, 
    private router: Router,
    private globalService: GlobalService,
    public dialog: MatDialog,
    private api: ApiService,
    private fb: FormBuilder) { 
      this.searchvalue = this.fb.group({
        q: ['', [Validators.required, Validators.minLength(3)] ],
      });
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

  searchPosts () {
    this.api.searchPosts(this.searchvalue.value.q).subscribe(
      response => {
        this.router.navigate(['/search/' + this.searchvalue.value.q]);
        console.log(response)
        },
      error => {
        console.log(error)
        }

    )
  }

}

