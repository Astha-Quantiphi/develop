import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userApp';
  UserName: string='';
  post: string= '';

  constructor(private user: UserService){};
  addData(username){
    
  }
  addPost(post){

  }

  ngOnInit(){

  }




  }
