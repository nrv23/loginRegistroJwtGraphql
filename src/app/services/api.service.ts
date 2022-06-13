import { getUsers, login, meData } from './../../operations/query';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { LoginResult } from '../interface/login.interface';
import { ApolloQueryResult } from 'apollo-client';
import { MeResult } from '../interface/me.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  //Lista de usuarios

  getUsers() {
    return this.apollo
      .watchQuery({
        query: getUsers,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        map((result: any) => {
          // este result es la respuesta que trae de la api
          // valueChanges lee el resultado

          return result.data.users;
        })
      );
  }

  //login

  login(email: string, password: string) : Observable<LoginResult> {
    return this.apollo
      .watchQuery({
        query: login,
        variables: {
          // lee lar variables que se envian como parametros
          email,
          password,
        },
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        map((result: ApolloQueryResult<LoginResult>) => { // ApolloQueryResult<LoginResult> con esa interfaz se tipa la respuesta 
          // que viene del api de graphql
          // este result es la respuesta que trae de la api
          // valueChanges lee el resultado

          return result.data;
        })
      );
  }

  //información de un usuario

  getMe(token: string) {
    return this.apollo
      .watchQuery({
        query: meData,
        context: {
          headers: new HttpHeaders({
            authorization: token,
          }),
        },
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        map((result: ApolloQueryResult<MeResult>) => {
          // este result es la respuesta que trae de la api
          // valueChanges lee el resultado

          return result.data;
        })
      );
  }
}
