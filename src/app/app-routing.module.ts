import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DevelopersComponent} from './developers/developers.component';
import {BrowserModule} from '@angular/platform-browser';


const routes: Routes = [{
  path: 'developers',
  component: DevelopersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
  declarations: [DevelopersComponent]
})
export class AppRoutingModule {
}
