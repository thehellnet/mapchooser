import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {MapbuttonComponent} from './mapbutton/mapbutton.component';
import {ChooserComponent} from './chooser/chooser.component';
import {FastComponent} from './fast/fast.component';

@NgModule({
  declarations: [
    AppComponent,
    MapbuttonComponent,
    ChooserComponent,
    FastComponent
  ],
  imports: [
    NgbModule,
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
