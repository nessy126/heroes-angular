import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroesLink = '/heroes'
  dashboardLink = '/dashboard'
  title = 'Tour of Heroes';
}
