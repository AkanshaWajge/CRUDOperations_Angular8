import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Todo } from '../todo';
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 
  data: Todo[] = [];
  totalRec : number;
  page: number = 1;
  constructor(private api: ApiService) { }
   
 
  ngOnInit() {
    this.api.getTodos()
      .subscribe(res => {
        this.data = res;
      }, err => {
        console.log(err);
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