import { MeComponent } from './components/me/me.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "me", component: MeComponent},
  { path: '**',pathMatch: 'full',redirectTo: 'login'}, // si la ruta no existe redirigir a login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
