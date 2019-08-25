import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MfSidebarModule} from 'mf-sidebar';
import {MfWorkspaceModule} from 'mf-workspace';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MfSidebarModule, MfWorkspaceModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
