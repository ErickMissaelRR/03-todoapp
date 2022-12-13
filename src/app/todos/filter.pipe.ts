import { Pipe, PipeTransform } from '@angular/core';
import { filterValids } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], type: filterValids): Todo[] {
    switch (type) {
      case 'all':
        return todos;

      case 'pendients':
        return todos.filter( todo => !todo.completed)

      case 'completed':
        return todos.filter( todo => todo.completed)

      default:
        return todos;
    }
  }
}
