import { deleteToken } from 'src/utils/jwt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor() { }


  logout () {

    deleteToken();
  }
}
