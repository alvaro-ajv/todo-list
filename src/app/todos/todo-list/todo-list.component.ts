import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { validFilters } from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  
  todos: Todo[] = []

  actualFilter: validFilters

  constructor(private store: Store<AppState>){}
  
  ngOnInit(): void {
      this.store.subscribe(
        ({todos, filter}) => {
          this.todos = todos
          this.actualFilter = filter
        }
      )
  }
}
