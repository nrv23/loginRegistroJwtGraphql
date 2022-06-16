import {
  UserData,
  UserRegisterResponse,
  UserUpdateResponse,
} from './../../interface/user.interface';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) {}

  // userlist: UserData[];
  
  formUser: User = {
    nombre: '',
    lastName: '',
    email: '',
    password: '',
  };
  status: boolean;
  message: string = '';

  addUser(event: Event) {
    event.preventDefault(); // No propagar los eventos del submit para no refrescar el componente

    if (this.formUser.password !== this.formUser.confirm_password) {
      this.message = 'Las contraseñas no coinciden';
      this.status = false;
    } else {
      delete this.formUser.confirm_password;

      this.userService.addUser(this.formUser).subscribe(
        (response) => {
          const {
            add: { status, message, user },
          } = response.data as UserRegisterResponse;

          if (!status) {
            //No se insertó el usuario
            this.status = status;
            this.message = message;
          } else {
            //this.userlist.push(user);
            this.status = status;
            this.message = message;
          }
        },
        (error) => {
          console.log(error);
          this.status = false;
          this.message = error;
        }
      );
    }
  }

  updateUser(event: Event) {
    event.preventDefault();

    this.userService.updateUser(this.formUser).subscribe(
      (response) => {
        const {
          update: { status, message },
        } = response.data as UserUpdateResponse;

        if (!status) {
          //No se insertó el usuario
          this.showMessage(message, status);
        } else {
          //this.userlist.push(user);
          this.showMessage(message, status);
        }
      },
      (error) => {
        console.log(error);
        this.showMessage("Error inesperado", false);
      }
    );
  }

  showMessage(message: string = '', status: boolean = null) {
    this.status = status;
    this.message = message;
  }

  ngOnInit(): void {}
}
