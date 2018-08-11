import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../app.component.css']
})
export class NavComponent {

  pages = [
    { url:  'home', text: 'Home' }
    , { url:  'about', text: 'About' }
   , { url:  'blogs', text: 'Blog' }
   , { url:  'programs', text: 'Open Source Programs' }
   , { url:  'games', text: 'HTML5 Games' }
   , { url:  'turing', text: 'Online Turing Machine Model' }
   , { url:  'login', text: 'Login' }
  ];

}
