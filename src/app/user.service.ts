import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('http://localhost:3000/users').subscribe(data=>{
      console.log(data);
    })
  }
  addData(UserName) {
    const obj = {
      UserName: UserName
    };
    console.log(obj);
    this.http.post(`http://localhost:3000/user`, obj)
        .subscribe(data => console.log('data'));
  }
  addPost(post) {
    const obj = {
      post: post
    };
    console.log(obj);
    this.http.post(`http://localhost:3000/user`, obj)
        .subscribe(data => console.log('data'));
  }

}
