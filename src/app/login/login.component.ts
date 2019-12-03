import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  user: string;
  password: string;

  ngOnInit() {
  }

  login() {
    console.log(`Login: ${this.user} with password ${this.password}`);
    this.loginService.login(this.user, this.password);
    if (this.isAuthenticated()) {
      this.router.navigateByUrl('/home');
    } else {
      console.log('Not authed');
    }
  }

}
