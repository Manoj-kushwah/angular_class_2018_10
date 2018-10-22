import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DataMapService} from './services/data-map.service';
import {HttpClientModule} from '@angular/common/http';
import {RequestHelper} from './services/RequestHelper';
import {AppRoutingModule} from './modules/app.routing.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RequestHelper,
    DataMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
