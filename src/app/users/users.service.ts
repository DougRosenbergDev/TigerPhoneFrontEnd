import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';
import { User, UserDTO } from './user';
import { Plan } from '../plans/plan';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //azure db endpoint
  private userUrl = "tigerbackend6.database.windows.net/users"
  // for local development
  // private userUrl = 'https://localhost:7215/api/user/';
  // private planUrl = 'https://localhost:7215/api/user/plans';

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

  // getPlans(): Observable<Plan[]>{
  //   return this.http.get<Plan[]>(this.userUrl.this.httpOptions);
  // }
  
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
