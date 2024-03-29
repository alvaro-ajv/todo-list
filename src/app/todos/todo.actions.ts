import { createAction, props } from "@ngrx/store";


export const createTodo = createAction(
    '[TODO] Create todo',
    props<{text:string}>()
)

export const toggleTodo = createAction(
    '[TODO] Toggle todo',
    props<{id: number}>()
)

export const editTodo = createAction(
    '[TODO] Edit todo',
    props<{id: number, text: string}>()
)

export const deleteTodo = createAction(
    '[TODO] Delete todo',
    props<{id: number}>()
)

export const toggleAllTodos = createAction(
    '[TODO] Toggle all todos',
    props<{completed: boolean}>()
)

export const clearCompletedTodos = createAction(
    '[TODO] Clear completed todos'
)