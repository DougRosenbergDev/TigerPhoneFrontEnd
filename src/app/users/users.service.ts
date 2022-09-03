import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';
import { User, UserDTO } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userUrl = 'https://localhost:7082/api/users';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, this.httpOptions);
  }
  
  getUser(id: number): Observable<User> {
    let url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url, this.httpOptions);
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }
  
  updateUser(user: User): Observable<User> {
    let url = `${this.userUrl}/${user.id}`;
    return this.http.put<User>(url, user, this.httpOptions);
  }
  
  deleteUser(id: Number): Observable<User> {
    return this.http.delete<User>(`${this.userUrl}/${id}`, this.httpOptions);
  }
  
}
