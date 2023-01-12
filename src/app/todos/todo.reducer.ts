import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo("Save the world"),
    new Todo("Defeat Thanos"),
    new Todo("Buy Ironman's suite"),
    new Todo("Steal Captain America's shield"),
];

export const todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, {text}) => [...state, new  Todo(text)]),
  on(actions.toggleTodo, (state, {id}) => {
    return state.map(todo => {
        if (todo.id == id){
            return {
                ...todo,
                completed: !todo.completed
            }
        }
        return todo
    })
  }),
  on(actions.editTodo, (state, {id, text}) => {
    return state.map(todo => {
        if (todo.id == id){
            return {
                ...todo,
                text
            }
        }
        return todo
    })
  }),
  on(actions.deleteTodo,(state, {id}) => {
    return state.filter(todo => todo.id != id)
  }),
  on(actions.toggleAllTodos, (state, {completed}) => {
    return state.map(todo => {
        return {
            ...todo,
            completed
        }
    })
  }),
  on(actions.clearCompletedTodos, state => 
    state.filter(todo => !todo.completed))
);