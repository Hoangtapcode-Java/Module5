import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ss4HackerNewsComponent } from './ss4-hacker-news/ss4-hacker-news.component';
import {FormsModule} from "@angular/forms";
import { Ss4HackerNewsLikeComponent } from './ss4-hacker-news-like/ss4-hacker-news-like.component';
import { Ss4NavbarComponent } from './ss4-navbar/ss4-navbar.component';
import { Ss4FooterComponent } from './ss4-footer/ss4-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Ss4HackerNewsComponent,
    Ss4HackerNewsLikeComponent,
    Ss4NavbarComponent,
    Ss4FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
