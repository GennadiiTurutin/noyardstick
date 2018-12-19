import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private globalService: GlobalService) { }

  ngOnInit() {
    this.globalService.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/']);
  }
}
