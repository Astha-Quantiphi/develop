import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  selected:string;
  public post: string= '';
  postForm= new FormGroup({
    post: new FormControl(''),
    });
  constructor(private fb: FormBuilder) { }
  public postArray:Object = {};
  public userArray: string[] = [];
  public newPostArray: string[] = [];
  
  addPost(p){
    console.log(this.postArray);
    if(this.postArray[this.selected]){
      this.postArray[this.selected].push({
        "message":p.trim(),
        "timestamp": new Date()
      });
    } else {
      this.postArray[this.selected] = [{
        "message":p.trim(),
        "timestamp": new Date()
      }];
    }
    console.log(this.postArray);
    localStorage.setItem('postArray',JSON.stringify(this.postArray)); 
  }
  getPost(){
    if(localStorage.getItem('postArray')== null){
      this.postArray= {};
    }else{
      this.postArray= JSON.parse(localStorage.getItem('postArray'));
    }
  }

  getData(){
    if(localStorage.getItem('userArray')== null){
      this.userArray= [];
    }else{
      this.userArray= JSON.parse(localStorage.getItem('userArray'));
    }
  }
  ngOnInit() {
    
      this.postForm = this.fb.group({
        userArrayControl: ['']
      });
      this.getPost();
      this.getData();
  }

}

