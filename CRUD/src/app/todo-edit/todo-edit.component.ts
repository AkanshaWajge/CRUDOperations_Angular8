import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
 
import { Todo } from '../todo';
import { Key } from 'protractor';
 
@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
 
  todoForm: FormGroup;
  id:number= null;
 
  constructor(
    private formBuilder: FormBuilder, 
    private activeAouter: ActivatedRoute, 
    private router: Router, 
    private api: ApiService
  ) { }
 
  ngOnInit() {
     
    this.getDetail(this.activeAouter.snapshot.params['id']);
 
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
    });
  }

  // logKeyValuePairs(group: FormGroup) :void{
  //   Object.keys(group.controls).forEach((Key: string) =>{

  //     const abstractControl = group.get(Key);
  //     alert(Key+abstractControl.value);
  //   })
  // }

  getDetail(id) {
   
    this.api.getTodo(id)
      .subscribe(data => {
            
        this.todoForm.setValue({
          title: data[0].title
        });

        
        console.log(data);
      });
  }
  updateTodo(form:NgForm) {
 
    this.api.updateTodo(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );
     
  }
 
}