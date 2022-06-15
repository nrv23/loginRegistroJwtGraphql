import { getToken } from 'src/utils/jwt';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}
  
  public updateStateSession(value: boolean) {
    this.accessVar.next(value); // aqui escucha el cambio del valor del observable
  }

  public accessVar = new Subject<boolean>();
  public accessVar$ = this.accessVar.asObservable();

  canActivate(): boolean {
    // tslint:disable-next-line: max-line-length
    if (this.jwtHelper.isTokenExpired(getToken())) {
      this.updateStateSession(false);
      this.router.navigate(['/login']);
      return false;
    } else {
      this.updateStateSession(true);

      return true;
    }
  }
}
