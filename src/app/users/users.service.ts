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
  private userUrl = "https://tigerbackend8.azurewebsites.net/api/User";
  private userIdUrl = "https://tigerbackend8.azurewebsites.net/api/User/1?userId:userId";
  private userPlansUrl = "https://tigerbackend8.azurewebsites.net/api/User/1/Plans?userId=1";
  // for local development
  // private userUrl = 'https://localhost:7081/api/User';
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
  
  getUser(id: number, userId: number): Observable<User> {
    let url = `${this.userUrl}/${id}?userId=${userId}`;
    return this.http.get<User>(url, this.httpOptions);
  }

  // getUserPlans(): Observable<Plan[]>{
  //   return this.http.get<Plan[]>(this.userPlansUrl.this.httpOptions);
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
