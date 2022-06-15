import { Router } from '@angular/router';
import { MeService } from './../../../services/me.service';
import { LoginGuard } from './../../../guard/auth.guard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private guard: LoginGuard,
    private meService: MeService,
    private router: Router
  ) {
    this.guard.accessVar$.subscribe((response) => {
      this.show = response;
    });
  }

  show: boolean;

  logout() {
    this.meService.logout();
    this.router.navigate(['/login']);
    this.guard.updateStateSession(false);
  }

  ngOnInit(): void {}
}
