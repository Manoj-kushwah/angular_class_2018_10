import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './com/home/home.component';
import { NavBarTopComponent } from './com/nav-bar-top/nav-bar-top.component';
import { AboutComponent } from './com/about/about.component';
import { ContactComponent } from './com/contact/contact.component';
import { ProfileComponent } from './com/profile/profile.component';
import { BlogComponent } from './com/blog/blog.component';
import {DataMapService} from './services/data-map.service';
import {HttpClientModule} from '@angular/common/http';
import {RequestHelper} from './services/RequestHelper';
import {RouterModule} from '@angular/router';
import {AppRouteModule} from './modules/app/app.route.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [
    RequestHelper,
    DataMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
