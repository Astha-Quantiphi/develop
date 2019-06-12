import { AddPostComponent } from './post/add-post.component';
import { AddUserComponent } from './user/add-user.component';
import {AppComponent} from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'UserName', component: AddUserComponent },
    { path: 'post', component: AddPostComponent },
    { path: '', redirectTo: '/user', pathMatch: 'full' }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents= [AddUserComponent, AddPostComponent ]
