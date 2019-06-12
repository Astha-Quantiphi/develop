import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './user/add-user.component';
import { ListOfUserComponent } from './user/list-of-user.component';
import { AddPostComponent } from './post/add-post.component';
import { ListOfPostComponent } from './post/list-of-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListOfUserComponent,
    AddPostComponent,
    ListOfPostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
