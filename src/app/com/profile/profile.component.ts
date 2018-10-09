import { Component, OnInit } from '@angular/core';
import {DataMapService} from '../../services/data-map.service';
import {User} from '../../utils/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  text1:string;
  list: User[];
  constructor(public dataMap: DataMapService) {
    this.list = this.dataMap.userList;
  }

  ngOnInit() {
    console.log('dataMap: ', this.dataMap);
  }

  searchQuery(event: KeyboardEvent){
    console.log(event);
    let text=event.target['value'];
    console.log(text);
    if(text == null || text == ''){
      this.list = this.dataMap.userList;
    }else {
      this.list = this.dataMap.userList.filter(value => value.firstName.toLowerCase().includes(text.toLowerCase()));
    }
  }
}
