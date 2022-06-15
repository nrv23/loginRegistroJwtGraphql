import { UserData } from './../../interface/user.interface';
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

  userlist: UserData[];
  message: string = '';
  formUser: User;

  addUser(event: Event) {
    event.preventDefault(); // No propagar los eventos del submit para no refrescar el componente

    this.userService.addUser(this.formUser).subscribe(
      ({ add }) => {
        const { status, message, user } = add;

        if(!status) {
          //No se insertó el usuario
        } else {
          this.userlist.push(user);
          this.message = message;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
