import { FormBuilder, FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public post: string='';
  public postArray:Object = {};
  public userArray: string[] = [];
  selected:string = 'select';
  postForm= new FormGroup({
    post: new FormControl(''),
  });
  constructor(private fb: FormBuilder) { }
  
  addPost(p){
    console.log(this.postArray);
    if(this.postArray[this.selected]){
      this.postArray[this.selected].push({
        "message":p.trim(),
        "timestamp": new Date(),
        "selectedname":this.selected,
      });
      this.post= '' 
    } else {
      this.postArray[this.selected] = [{
        "message":p.trim(),
        "timestamp": new Date(),
        "selectedname":this.selected,
      }];
      this.postForm.reset();
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
    this.userArray= ['--select--'];
     this.selected = this.userArray[0];

    if(localStorage.getItem('userArray') != null){
      const data = JSON.parse(localStorage.getItem('userArray'));
      data.map(item=> this.userArray.push(item));
    }

  }

  ngOnInit() {
    
    this.selected = 'select';
      this.getPost();
      this.getData();

  }

}

