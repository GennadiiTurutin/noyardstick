import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css'],
  providers: [ApiService]
})

export class UnsubscribeComponent implements OnInit {
  providers: [ApiService]
  loading: boolean = false;
  id: string;

  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: DialogService) { }

  ngOnInit() {
    setTimeout(() => {
          this.router.navigate(['/']);
        }, 10000);
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.deleteSubscriber(this.id).subscribe(
      response => {
        console.log('Successful');
        this.loading = true;
       // this.router.navigate(['/']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    )
  }
}


