import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProgramsComponent } from './programs/programs.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { TuringComponent } from './turing/turing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    BlogsComponent,
    ProgramsComponent,
    GamesComponent,
    LoginComponent,
    HomeComponent,
    TuringComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
