import { getToken } from 'src/utils/jwt';
import { Apollo } from 'apollo-angular';
import { addUser, updateUser } from '../../operations/mutation';
import { Injectable } from '@angular/core';
import User from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';

addUser;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  addUser(user: User) {
    return this.apollo.mutate({
      mutation: addUser,
      variables: { user },
    });
  }

  //Observable<UserUpdateResponse>

  updateUser(user: User) {
    return this.apollo.mutate({
      mutation: updateUser,
      context: {
        headers: new HttpHeaders({
          authorization: getToken(),
        }),
      },
      variables: { user },
    });
  }
}
