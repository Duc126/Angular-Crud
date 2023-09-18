import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  validation(todoForm: Todo) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  public get() {
    return this.http.get<Todo[]>("http://localhost:3000/todos")
  }
  public create(load: Todo) {
    return this.http.post<Todo>("http://localhost:3000/todos", load);
  }
  public edit(id:number) {
    return this.http.get<Todo>(`http://localhost:3000/todos/${id}`);

  }
  public update(load: Todo) {
    return this.http.put(`http://localhost:3000/todos/${load.id}`,load);
  }
  public delete(id:number){
    return this.http.delete<Todo>(`http://localhost:3000/todos/${id}`);
  }
}

