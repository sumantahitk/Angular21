import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // apiURL='https://jsonplaceholder.typicode.com/users';

  apiURL='http://localhost:3000/users'
  constructor(private http:HttpClient){}

  getUsers():Observable<User[]>{
    // return this.http.get<any[]>(this.apiURL);
    return this.http.get<User[]>(this.apiURL);
  }

  addUser(user:User):Observable<User>
{
  return this.http.post<User>(this.apiURL,user);
}

  updateUser(id:number, user:User):Observable<User>{
    return this.http.put<User>(`${this.apiURL}/${id}`,user);
  }

    updateUserStatus(id:number, status:boolean):Observable<User>{
    return this.http.put<User>(`${this.apiURL}/${id}`,{status});
  }

   deleteUser(id:number):Observable<void>{
     return this.http.delete<void>(`${this.apiURL}/${id}`);
  }


}
