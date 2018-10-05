import { Component, Input, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {NavBarText} from '../../constants/nav-bar-text'

@Component({
  selector: 'app-nav-bar-top',
  templateUrl: './nav-bar-top.component.html',
  styleUrls: ['./nav-bar-top.component.css']
})
export class NavBarTopComponent implements OnInit {
  @Input('app') private app: AppComponent;
  public text: NavBarText = NavBarText;
  constructor() { }

  ngOnInit() {
    console.log(this.app);
  }
  changeCom(str: string){
    this.app.appRoute = str;
  }
}
