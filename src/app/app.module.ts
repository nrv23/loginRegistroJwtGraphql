import { GraphqlModule } from './graphql/graphql.module'; // se importa el modulo para poder consumir el api de graphql
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { MeComponent } from './components/me/me.component';

// agregar los modulos para poder trabajar con ellos en cualquier parte de la aplicacion

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphqlModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
