import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { MeData } from 'src/app/interface/me.interface';
import { getToken,deleteToken } from 'src/utils/jwt';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
 
  userData: MeData = null;
  
  constructor(private apiService: ApiService, private router: Router) {
    
  }

  

  ngOnInit(): void {
    this.loadDataUser();
  }

  loadDataUser() {

    const token: string = getToken();

    if(!token) return this.router.navigate(["/login"]);
    
    this.apiService.getMe(token).subscribe(
      ({ me: { status, message, user } }) => {
        if (!status) {
          // algo salió mal con la petición
          deleteToken();
          this.router.navigate(["/login"]);
        } else {
          console.log(user);
          this.userData = user;
          console.log(this.userData)

        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
