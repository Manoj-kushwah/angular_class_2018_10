import { Injectable } from '@angular/core';
import {User} from '../utils/user';

@Injectable()
export class DataMapService {
  public userList: User[];
  constructor() {
    console.log('User:', new User());
    this.userList = [];
    this.userList.push(new User('Admin', '', 'male', new Date('Oct 19, 2017').getTime(), 'admin@gmail.com'));
    generateUsers(this.userList);
  }

}

function generateUsers(list: User[]): User[]{
  list.push(new User('User', '1', 'male', Date.now(), 'user_1@gmail.com'));
  list.push(new User('User', '2', 'male', Date.now(), 'user_2@gmail.com'));
  list.push(new User('User', '3', 'male', Date.now(), 'user_3@gmail.com'));
  list.push(new User('User', '4', 'male', Date.now(), 'user_4@gmail.com'));
  return list;
}
