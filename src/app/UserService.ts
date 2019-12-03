import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from './login/login.service';

export class User {
  id: string;
  name: string;
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  users() {
    return this.http.get<User>('http://localhost:8080/user');
  }

}
