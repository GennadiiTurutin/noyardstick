import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GlobalService } from './services/global.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatPaginatorModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import {NgxPaginationModule} from 'ngx-pagination';
import { Pipe, PipeTransform } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebars/right-sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WatchersComponent } from './watchers/watchers.component';
import { ArchiveComponent } from './archive/archive.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LeftSidebarComponent } from './sidebars/left-sidebar/left-sidebar.component';
import { SignindialogComponent } from './auth/signindialog/signindialog.component';
import 'hammerjs';
import { SubscriptionComponent } from './popups/subscription/subscription.component';
import { TagsearchComponent } from './search_pages/tagsearch/tagsearch.component';
import { SearchComponent } from './search_pages/search/search.component';
import { AvatarModule } from 'ngx-avatar';
import { DiscussionComponent } from './discussion/discussion.component';
import { ContactComponent } from './popups/contact/contact.component';
import { CategorysearchComponent } from './search_pages/categorysearch/categorysearch.component';
import { ApiService } from './services/api.service';
import { TruncatePipe } from './pipes/truncate';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'about_me', component: AboutMeComponent },
  { path: 'watchers', component: WatchersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: 'tags/:id', component: TagsearchComponent },
  { path: 'categories/:id', component: CategorysearchComponent }

];


@NgModule({
  
  declarations: [
    AppComponent,
    SidebarComponent,
    PostComponent,
    HomeComponent,
    AboutMeComponent,
    WatchersComponent,
    ArchiveComponent,
    PostDetailComponent, 
    SignupComponent,
    LeftSidebarComponent,
    SignindialogComponent,
    SubscriptionComponent,
    TagsearchComponent,
    SearchComponent,
    DiscussionComponent,
    ContactComponent,
    CategorysearchComponent,
    TruncatePipe
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
    AvatarModule, 
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule
  ],
  entryComponents: [SignindialogComponent, SubscriptionComponent, ContactComponent],
  providers: [ 
    ApiService,
    DatePipe, GlobalService, 
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
