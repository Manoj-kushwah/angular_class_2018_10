import { Injectable } from '@angular/core';

@Injectable()
export class DataMapService {
  public list: string[];
  constructor() {
    this.list = ['Manoj', 'Sandeep', 'Rahul'];
  }

}
