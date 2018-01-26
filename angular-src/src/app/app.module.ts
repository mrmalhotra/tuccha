import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule,Routes} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {LinkService} from "./services/link.service";
import {HttpModule} from "@angular/http";

const appRoutes = [
  {path:'', component:HomeComponent},
  {path:'login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
