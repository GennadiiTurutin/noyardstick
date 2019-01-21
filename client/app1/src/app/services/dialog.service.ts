import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SubscriptionComponent } from '../popups/subscription/subscription.component';
import { MatDialog } from '@angular/material';
import 'rxjs/Rx';
import { ContactComponent } from '../popups/contact/contact.component';

@Injectable()
export class DialogService {
  
  baseurl: string = environment.apiUrl;

  constructor(public dialog: MatDialog ) { }

  openSubscriptionDialog(): void {
    let dialogRef = this.dialog.open(SubscriptionComponent, {
      width: '400px',
      disableClose: false
    });
    dialogRef.afterClosed()
  }

  openContact(): void {
    let dialogRef = this.dialog.open(ContactComponent, {
      width: '400px',
      disableClose: false
    });
    dialogRef.afterClosed()
  }
}
