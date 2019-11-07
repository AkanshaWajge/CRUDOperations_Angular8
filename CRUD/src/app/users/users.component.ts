import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Todo } from '../todo';
 
@Component({
  selector: 'app-todo',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  data: Todo[] = [];
  totalRec : number;
  page: number = 1;
  firstname: any;
  lastname: any;
  gender:any;
  isActive: boolean;
  email: any;

  constructor(private api: ApiService) { }
   
 
  ngOnInit() {
    this.api.getTodos()
      .subscribe(res => {
        this.data = res;
      }, err => {
        console.log(err);
      });  
  }
  
 getUsers(){
  this.api.getTodos()
  .subscribe(res => {
    this.data = res;
  }, err => {
    console.log(err);
  }); 
 }

 getUser(id: number){
  this.api.getTodo(id)
    
  .subscribe(data => {
      this.firstname= data[0].firstname;
      this.email = data[0].email;
      this.gender = data[0].gender;
      this.lastname = data[0].lastname;
      this.isActive = data[0].isActive;
    console.log(data);
  });
 }
  
  // deleteTodo(id, index) {
  //   this.api.deleteTodo(id)
  //     .subscribe(res => {    
  //         this.data.splice(index,1);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }
}