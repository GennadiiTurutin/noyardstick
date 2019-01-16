import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { ApiService } from '../app/services/api.service';
import { DialogService } from '../app/services/dialog.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SearchComponent } from '../app/search_pages/search/search.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService, UserService, DialogService]
})
export class AppComponent implements OnInit {
  searchvalue: FormGroup;
  posts: Observable<any>;
  categories = [];

  constructor(public userService: UserService, 
    private router: Router,
    private globalService: GlobalService,
    public api: ApiService,
    public dialog: DialogService,
    private fb: FormBuilder,
    ) { 
      this.searchvalue = this.fb.group({
        q: ['', [Validators.required, Validators.minLength(3)] ],
      });
    }

  ngOnInit() {
    this.getCategories(); 
    
  }

  searchPosts () {
    this.router.navigate(['/search/' + this.searchvalue.value.q]);
  }

  getCategories = () => {
    this.api.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  logoutClicked = () => {
    this.globalService.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/']);
  }
 
}
