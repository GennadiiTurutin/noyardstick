import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent implements OnInit {
  userSubscribe: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder,
              public DialogRef: MatDialogRef<SubscriptionComponent>,
              public dialog: MatDialog,
              private api: ApiService,
              private router: Router
              ) { 
    this.userSubscribe = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
    });
  }

  ngOnInit() {
    this.loading = false;
  }

  subscribeUser() {
    this.loading = true;
    this.api.postSubscriber(this.userSubscribe.value).subscribe(
      response => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      error => {
        this.loading = false;
        console.log('error', error)
      }
    )
  }

  Cancel(): void {
    this.DialogRef.close();
  }

}
