import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SearchComponent } from '../search/search.component';


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
    private api: ApiService,
    private fb: FormBuilder) { 
      this.searchvalue = this.fb.group({
        q: ['', [Validators.required, Validators.minLength(3)] ],
      });
    }

  ngOnInit() { }

  searchPosts () {
    window.location.reload();
    this.router.navigate(['/search/' + this.searchvalue.value.q]);
  }

}

