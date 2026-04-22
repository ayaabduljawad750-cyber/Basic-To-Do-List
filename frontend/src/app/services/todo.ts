import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_URL = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<any[]>(this.API_URL);
  }

  addTodo(todo: any) {
    return this.http.post(this.API_URL, todo);
  }
}