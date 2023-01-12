import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.models';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  @ViewChild('inputEdit') txtInputEdit: ElementRef

  editing: boolean = false

  chkCompleted: FormControl
  txtEdit: FormControl

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
      this.chkCompleted = new FormControl(this.todo.completed)
      this.txtEdit = new FormControl(this.todo.text, Validators.required)
      this.chkCompleted.valueChanges.subscribe(value => {
        this.store.dispatch(actions.toggleTodo({id: this.todo.id}))
      })
  }

  edit(){
    this.editing = true
    this.txtEdit.setValue(this.todo.text)
    setTimeout(() => {
      this.txtInputEdit.nativeElement.select()
    }, 1);
  }

  update(){
    this.editing = false
    if (this.txtEdit.invalid) return
    if (this.txtEdit.value === this.todo.text) return
    this.store.dispatch(actions.editTodo({id: this.todo.id, text: this.txtEdit.value}))
  }


  delete(){
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}))
  }

}
