import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:8081/user/login";
  constructor(private httpClient: HttpClient) { }

  login(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
