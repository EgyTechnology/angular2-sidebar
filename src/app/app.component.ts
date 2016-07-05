import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ SidebarComponent, ROUTER_DIRECTIVES ]
})
export class AppComponent {
  title = 'app works!';
}
