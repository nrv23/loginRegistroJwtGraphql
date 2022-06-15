import {  UserData } from './../../interface/user.interface';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  userlist: UserData[];

  loadUsersList() {
    this.apiService.getUsers().subscribe(
      ({users}) => {
        this.userlist = users;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.loadUsersList();
  }
}
