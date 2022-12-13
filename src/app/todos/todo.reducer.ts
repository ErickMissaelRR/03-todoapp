import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo')
];

const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, {text}) => [...state, new Todo(text)] ),

  on(actions.toggleAll, (state, {isCompleted}) => {
    return state.map( todo => {
        return {
          ...todo,
          completed: isCompleted
        } 
    })
  }),
  on(actions.toggleTodo, (state, {id}) => {
    return state.map( todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }  
    })
  }),

  on(actions.editTodo, (state, {id, text}) => {
    return state.map( todo => {
      if(todo.id === id){
        return {
          ...todo,
          text: text
        }
      } else {
        return todo;
      }  
    })
  }),

  on(actions.deleteTodo, (state, {id}) => state.filter( todo =>  todo.id !== id)),

  on(actions.clearCompleted, (state) => state.filter( todo => !todo.completed) ),

);

export function todoReducer(state: Todo[] = initialState, action: Action) {
    return _todoReducer(state, action)
}

