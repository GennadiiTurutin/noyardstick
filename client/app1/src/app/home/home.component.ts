import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  account: User = new User();
  userSub: Subscription;

  constructor(private globalService: GlobalService,
              private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle('Home')
    this.userSub = this.globalService.user.subscribe(
      me => this.account = me
    );
  }

}
