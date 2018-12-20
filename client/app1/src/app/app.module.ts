import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GlobalService } from './services/global.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WatchersComponent } from './watchers/watchers.component';
import { ArchiveComponent } from './archive/archive.component';
import { TwitterComponent } from './twitter/twitter.component';
import { TagsComponent } from './tags/tags.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignindialogComponent } from './auth/signindialog/signindialog.component';
import { TooltipComponent } from './auth/tooltip/tooltip.component';
import 'hammerjs';
import { SubscriptionComponent } from './subscription/subscription.component';
 
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'about_me', component: AboutMeComponent },
  { path: 'watchers', component: WatchersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent }
];


@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PostComponent,
    HomeComponent,
    AboutMeComponent,
    WatchersComponent,
    ArchiveComponent,
    TwitterComponent,
    TagsComponent,
    PostDetailComponent, 
    SignupComponent,
    LeftSidebarComponent,
    LogoutComponent,
    SignindialogComponent,
    TooltipComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule
  ],
  entryComponents: [SignindialogComponent, SubscriptionComponent],
  providers: [DatePipe, GlobalService, 
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
