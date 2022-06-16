import { Apollo } from 'apollo-angular';
import { addUser, updateUser } from '../../operations/mutation';
import { Observable } from 'rxjs';
import {
  UserRegisterResponse,
  UserUpdateResponse,
} from '../interface/user.interface';
import { Injectable } from '@angular/core';
import User from '../models/user.model';
import { ApolloQueryResult } from 'apollo-client';
import { map } from 'rxjs/operators';
addUser;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}



  addUser(user: User) {

    return this.apollo
      .mutate({
        mutation: addUser,
        variables: {user}
      });
      
  }

  //Observable<UserUpdateResponse>

  updateUser(user: User) {
    return this.apollo
      .mutate({
        mutation: updateUser,
        variables: {user},

    });
  }
}
