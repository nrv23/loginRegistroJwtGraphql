import { UserService } from './../../services/user.service';
import User from '../../models/user.model'
import {  UserData, UserUpdateResponse } from './../../interface/user.interface';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private apiService: ApiService, private userService: UserService) {}

  userlist: UserData[];
  formUser: User = {
    nombre: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: ''
  };


  status: boolean;
  message: string = '';

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

  loadUser(user: User) {

    this.formUser = user;
    delete this.formUser.password;

  }

  updateUser() {

    console.log(this.formUser)
    if(this.formUser.password?.length > 0 && (this.formUser.password !== this.formUser.confirm_password)) {

      this.showMessage('Las contraseñas no coinciden', false);
      return;
    }
    const { id, password,email,nombre,lastName }= this.formUser;

    this.userService.updateUser({id, password,email,nombre,lastName})
      .subscribe(({data}) => {

        const { update: {
          status, message, user
        }  } = data as UserUpdateResponse;

        if(status) {
          this.showMessage(message, status);
          this.loadUsersList();

        } else {
          this.showMessage(message, status);
        }
      },err => {
        console.log(err);
        this.showMessage('Ocurrió un error', false);
      })
  }

  showMessage(message: string = '', status: boolean = null) {
    this.status = status;
    this.message = message;
  }

  ngOnInit(): void {
    this.loadUsersList();
  }
}
