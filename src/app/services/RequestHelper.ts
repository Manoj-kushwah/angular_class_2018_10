import {Injectable} from '@angular/core';
import {User} from '../utils/user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

export interface HttpResponseData<T> {
  data: T;
  message: string;
  statusCode: number;
}


@Injectable()
export class RequestHelper {

  constructor(private http: HttpClient) {
    console.log('http:', this.http);
  }

  getAllUserData(): Promise<User[]> {
    return this.http.get('https://jsistudentportal.000webhostapp.com/user/users.php').toPromise().then((res: HttpResponseData<User[]>) => {
      console.log('res:', res);
      console.log('res:', res.data);
      return res.data;
    }).catch((err: HttpErrorResponse) => {
      console.log(err);
      console.log(err.message);
    });
  }

}
