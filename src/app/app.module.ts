import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MfWorkspaceModule} from 'mf-workspace';
import {MfSidebarModule} from 'mf-sidebar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MfWorkspaceModule, MfSidebarModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
