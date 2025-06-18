import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from './login/login.service';
import { NavigationBar } from './nav-bar/nav-bar';
import { ApiService } from './services/api.services';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavigationBar, HttpClientModule],
  providers: [LoginService,ApiService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'taurus-task';
}
