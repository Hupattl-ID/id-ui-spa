import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../UserService';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  users: any = [];

  ngOnInit() {
    super.ngOnInit();
    this.userService.users().subscribe((users: {}) => {
      this.users = users;
    });
  }

}
