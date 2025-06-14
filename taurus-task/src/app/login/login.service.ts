import { Injectable } from '@angular/core';

const USERNAME = 'admin';
const PASSWORD = 'admin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedIn = false;

  constructor() {}

  private check_login(username: string, password: string): boolean {
    if (username == USERNAME && password == PASSWORD) {
        return true
    }
    return false;
  }


  login(username: string, password: string): boolean {
    if (this.check_login(username, password)){
        this.loggedIn = true;
        return true;
    }
    return false;
  }

  logout(): boolean {
    this.loggedIn = false;
    return true;
  }

 // Angular Tip: Don't use fucntions inside if, for or anywhere inside the HTML. (only use them after using an event)
 // For this check change detection.   
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
