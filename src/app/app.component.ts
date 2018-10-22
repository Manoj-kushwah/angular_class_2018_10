import {Component, OnInit} from '@angular/core';
import {RequestHelper} from './services/RequestHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public instance: AppComponent = this;
  public appRoute: string = 'home';

  constructor(private req: RequestHelper) {

  }

  ngOnInit() {
    this.req.getAllUserData();
  }

}
