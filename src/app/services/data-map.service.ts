import {Injectable} from '@angular/core';
import {User} from '../utils/user';

@Injectable()
export class DataMapService {
  public userList: User[];

  constructor() {
    this.userList = [];
  }

  public addUserInUserList(user: User): User {
    this.userList.push(user);
    return user;
  }

  public addUserInUserListByUserData(userData): User {
    let user: User = new User(userData.userId, userData.role, userData.email, userData.firstName, userData.lastName, userData.gender, userData.dob, userData.password);
    return this.addUserInUserList(user);
  }

}
