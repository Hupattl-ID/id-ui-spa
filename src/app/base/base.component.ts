import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../UserService';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({template: ''})
export class BaseComponent implements OnInit {

  constructor(
    protected userService: UserService,
    protected router: Router,
    protected loginService: LoginService) {
  }

  ngOnInit(): void {
    if (!this.loginService.isAuthenticated()) {
      console.log('User not authenticated - redirecting to login');
      this.router.navigateByUrl('/login');
    }
  }

  isAuthenticated(): boolean {
    return this.loginService.isAuthenticated();
  }

  authenticationToken(): string {
    return this.loginService.token;
  }

}
