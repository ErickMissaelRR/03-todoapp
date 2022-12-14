import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  chkCompleted !: FormControl;
  txtInput !: FormControl;
  editing = false;

  @Input() todo !: Todo
  @ViewChild('editInput') editInput !: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe( checked => {
      console.log(checked);
      this.store.dispatch(actions.toggleTodo({id: this.todo.id}))
    })
  }

  edit(){
    this.editing = true;

    this.txtInput.setValue(this.todo.text)

    setTimeout(() => {
      this.editInput.nativeElement.select();
    }, 1);
    console.log(this.editing);
  }

  finishEdit() {
    this.editing = false

    if( this.txtInput.invalid ) return; 

    if( this.txtInput.value === this.todo.text ) return; 

    this.store.dispatch(actions.editTodo({id: this.todo.id, text: this.txtInput.value}))
  }

  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}))
  }

}
