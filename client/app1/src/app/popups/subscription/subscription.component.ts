import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent implements OnInit {
  userSubscribe: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder,
              public DialogRef: MatDialogRef<SubscriptionComponent>,
              public dialog: MatDialog
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
    console.log('Successfully subscribed!', this.userSubscribe.value),
    this.Cancel()
    error => {
        this.loading = false;
        console.log('error', error)
      }
  }

  Cancel(): void {
    this.DialogRef.close();
  }

}
