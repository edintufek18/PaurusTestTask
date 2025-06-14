import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from './login/login.service';
import { NavigationBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavigationBar],
  providers: [LoginService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'taurus-task';
}
