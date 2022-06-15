import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { MeComponent } from './components/me/me.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "me", component: MeComponent,canActivate:  [LoginGuard]},
  { path: "register", component: RegisterComponent,canActivate:  [LoginGuard]},
  { path: "users", component: UsersComponent,canActivate:  [LoginGuard]},
  { path: '**',pathMatch: 'full',redirectTo: 'login'}, // si la ruta no existe redirigir a login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
