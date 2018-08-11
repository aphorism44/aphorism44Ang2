import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { GamesComponent } from '../games/games.component';
import { ProgramsComponent } from '../programs/programs.component';
import { LoginComponent } from '../login/login.component';
import { NavComponent } from '../nav/nav.component';
import { TuringComponent } from '../turing/turing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
  , { path: 'about', component: AboutComponent }
  , { path: 'blogs', component: BlogsComponent }
  , { path: 'programs', component: ProgramsComponent }
  , { path: 'games', component: GamesComponent }
  , { path: 'turing', component: TuringComponent }
  , { path: 'login', component: LoginComponent }
  , { path: '', redirectTo: '/home', pathMatch: 'full' }
  , { path: '**', redirectTo: '/home', pathMatch: 'full' }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
