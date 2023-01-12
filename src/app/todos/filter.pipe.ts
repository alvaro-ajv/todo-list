import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.models';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch( filter ){
      case 'completed': 
        return todos.filter(todo => todo.completed)
      
      case 'pending':
        return todos.filter(todo => !todo.completed)

      default:
        return todos

    }
  }

}
