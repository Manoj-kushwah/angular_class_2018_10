import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from '../../com/contact/contact.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../../com/home/home.component';
import {AboutComponent} from '../../com/about/about.component';
import {ProfileComponent} from '../../com/profile/profile.component';
import {BlogComponent} from '../../com/blog/blog.component';
import {NavBarTopComponent} from '../../com/nav-bar-top/nav-bar-top.component';
import {AppComponent} from '../../app.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path:'home', redirectTo:''
      },
      {
        path:'', component: HomeComponent
      },
      {
        path:'about', component: AboutComponent
      },
      {
        path:'contact', component: ContactComponent
      },
      {
        path:'profile', component: ProfileComponent
      },
      {
        path:'blog', component: BlogComponent
      },
      {
        path: '**', redirectTo:''
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarTopComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    BlogComponent
  ]
})
export class AppRouteModule { }
