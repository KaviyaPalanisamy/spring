import {Injectable} from '@angular/core';
import { Todo } from "./todo";


@Injectable()
export class AppService {

  
  lastId: number = 0;

  
  todos: Todo[] = [];

  constructor() {
  }

  
  addTodo(todo: Todo): AppService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  
  deleteTodoById(id: number): AppService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

 
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

 
  // toggleTodoComplete(todo: Todo){
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

}