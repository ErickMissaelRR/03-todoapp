import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from 'src/app/filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actions.filterValids = 'all'
  filters: actions.filterValids[] = ['all', 'completed', 'pendients']

  pendients: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe( filter => this.currentFilter = filter );
    this.store.subscribe( state => {
      this.currentFilter = state.filter
      this.pendients = state.todos.filter( todo => !todo.completed ).length;
    });
  }

  filterChange( filter: actions.filterValids){
    this.store.dispatch(actions.setFilter({filter: filter}))
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted())
  }

}
