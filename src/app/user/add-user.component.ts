import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  public UserName: string='';
  constructor() { }
  public userArray: string[] = [];

addData(e){

  this.userArray.push(this.UserName);
  localStorage.setItem('userArray',JSON.stringify(this.userArray));
  localStorage.getItem('local');
  this.UserName= ''
  
}
getData(){
  if(localStorage.getItem('userArray')== null){
    this.userArray= [];
  }else{
    this.userArray= JSON.parse(localStorage.getItem('userArray'));
  }
}
  ngOnInit() {
    this.userForm = new FormGroup({
      UserName: new FormControl()

    });
    this.getData();
  }
}
