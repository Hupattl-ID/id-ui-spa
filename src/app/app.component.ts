import {Component, OnInit} from '@angular/core';
import {LoginService} from './login/login.service';
import {Router} from '@angular/router';
import {BaseComponent} from './base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  title = 'id-ui';
}
