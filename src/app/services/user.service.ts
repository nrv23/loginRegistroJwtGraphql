import { Apollo } from 'apollo-angular';
import { addUser } from '../../operations/mutation';
import { Observable } from 'rxjs';
import { UserResponse } from '../interface/user.interface';
import { Injectable } from '@angular/core';
import User from '../models/user.model';
import { ApolloQueryResult } from 'apollo-client';
import { map } from 'rxjs/operators';
addUser
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  addUser(user: User) : Observable<UserResponse> { 
    return this.apollo
      .watchQuery({
        query: addUser,
        variables: user,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        map((result: ApolloQueryResult<UserResponse>) => {
          // este result es la respuesta que trae de la api
          // valueChanges lee el resultado

          return result.data;
        })
      );
  }
}
