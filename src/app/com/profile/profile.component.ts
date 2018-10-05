import { Component, OnInit } from '@angular/core';
import {DataMapService} from "../../services/data-map.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dataMap: DataMapService) { }

  ngOnInit() {
    console.log('dataMap: ',this.dataMap);
  }

}
