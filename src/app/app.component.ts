import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {NavBarText} from './constants/nav-bar-text';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {User} from './utils/user';
import {RequestHelper} from './services/RequestHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public instance: AppComponent = this;
  public textNav: NavBarText = NavBarText;
  public appRoute: string = 'home';

  constructor(private req:RequestHelper){

  }

  ngOnInit(){
    this.req.getAllUserData();
  }

}
