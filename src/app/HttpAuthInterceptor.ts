import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {LoginService} from './login/login.service';

@Injectable()
export class DebugIdHttpInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginService.isAuthenticated()) {
      const req = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.loginService.token}`)
      });
      return next.handle(req);
    } else {
      return next.handle(request);
    }
  }

}
