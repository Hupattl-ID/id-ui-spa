import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {ifTrue} from 'codelyzer/util/function';

export interface Login {
  user: string;
  password: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'A-Type': 'application/json'
  })
};

@Injectable()
export class LoginService {

  token = '';

  constructor(private http: HttpClient) {
  }

  login(user: string, password: string) {
    const login: Login = {
      user,
      password
    };
    const token = 'nope';
    return this.http.post<string>(
      'http://localhost:8080/authentication',
      login,
      {
        headers: new HttpHeaders(
          {'Content-Type': 'application/json'}),
        responseType: 'text' as 'json'
      })
      .subscribe((data: string) => {
        console.log(data);
        this.token = data;
      });
  }

  isAuthenticated(): boolean {
    if (this.token === '') {
      return false;
    } else {
      return true;
    }
  }

  ping(token: string) {
    this.http.get<string>(
      'http://localhost:8080/ping/info',
      {headers: new HttpHeaders({'Content-Type': 'text/plain', Authorization: `Bearer ${token}`}), responseType: 'text' as 'json'})
      .subscribe((data: string) => {
        console.log(data);
      });
  }

}
