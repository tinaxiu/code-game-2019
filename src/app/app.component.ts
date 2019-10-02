import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template:`
 <nav-bar></nav-bar>
 <search></search>
 <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'demo-tina';
}

// <batch-input></batch-input>
 //<output-list></output-list>
