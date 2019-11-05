import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Todo } from './todo';



// const apiUrl = "http://localhost:3000/";
 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http :HttpClient) { }
  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>("http://localhost:3000/posts", httpOptions)
      .pipe(
        tap(heroes => console.log('fetched todos')),
        catchError(this.handleError('getTodos', []))
      );
  }
   
  getTodo(id: number): Observable<Todo> {
    const apiUrl = "http://localhost:3000/posts";
    const url = `${apiUrl}?id=${id}`;
    return this.http.get<Todo>(url).pipe(
      tap(_ => console.log(`fetched todo id=${id}`)),
      catchError(this.handleError<Todo>(`getTodo id=${id}`))
    );
  }
   
  addTodo (todo): Observable<Todo> {
    const apiUrl = "http://localhost:3000/posts/";
    return this.http.post<Todo>(`${apiUrl}`, todo, httpOptions).pipe(
      tap((todo: Todo) => console.log(`added todo w/ id=${todo.id}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }
   
  updateTodo (id, todo): Observable<any> {
    const apiUrl= "http://localhost:3000/posts";
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, todo, httpOptions).pipe(
      tap(_ => console.log(`updated todo id=${id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }
   
  // deleteTodo (id): Observable<Todo> {
  //   const apiUrl= "http://localhost:3000/posts/";
  //   const url = `${apiUrl}/${id}`;
   
  //   return this.http.delete<Todo>(url, httpOptions).pipe(
  //     tap(_ => console.log(`deleted todo id=${id}`)),
  //     catchError(this.handleError<Todo>('deletetodo'))
  //   );
  // }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}
