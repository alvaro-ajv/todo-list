import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from '../../filter/filter.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  actualFilter: filterActions.validFilters = 'all';
  filters: filterActions.validFilters[] = [
    'all',
    'pending',
    'completed'
  ]
  pendingTasks: number = 0

  ngOnInit(): void {
      // this.store.select('filter').subscribe(filter => {
      //   this.actualFilter = filter
      // })
      this.store.subscribe(state => {
        this.actualFilter = state.filter
        this.pendingTasks = state.todos.filter(filter => !filter.completed).length
      })
  }

  changeFilter(filter: filterActions.validFilters) {
    this.store.dispatch(filterActions.setFilter({filter: filter}))
  }

  clearCompletedTodos(){
    this.store.dispatch(todoActions.clearCompletedTodos())
  }

}
