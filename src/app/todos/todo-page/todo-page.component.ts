import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  isCompleted: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  tooggleAll() {
    this.isCompleted = !this.isCompleted;
    console.log(this.isCompleted);
    this.store.dispatch( actions.toggleAll({isCompleted: this.isCompleted}))
  }

}
