import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/app/interface/login.interface';
import { Router } from '@angular/router';
import { deleteToken, saveToken } from 'src/utils/jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: LoginData = {
    email: '',
    password: '',
  };

  message: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  save() {
    console.log(this.user);
  }

  login() {
    /*
    
    //cargar los servicios 

    this.apiService.getUsers()
    .subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    })
    
    */

    const { email, password } = this.user;

    this.apiService.login(email, password).subscribe(
      ({ login }) => {
        if (!login.status) {
          deleteToken();
          this.message = login.message;
          setTimeout(() => {
            this.message = '';
          }, 2500);
        } else {
          this.message = '';
          saveToken(login.token);
          // redireccionar a la pagina personal
          this.router.navigate(['/me']);
        }
      },
      (err) => {
        console.log(err);
        this.message = 'Algo salió mal';
      }
    );
  }

  ngOnInit(): void {}
}
