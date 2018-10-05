import { Component } from '@angular/core';
import {NavBarText} from './constants/nav-bar-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public instance: AppComponent = this;
  public textNav: NavBarText = NavBarText;
  public appRoute: string = 'home';
}
