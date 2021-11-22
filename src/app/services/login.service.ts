import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticated: boolean = false;

  mostrarMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  loginUser(email: string, password: string) {
    this.authenticated = (email === 'admin@admin.com' && password === '123456');
    console.log(this.authenticated);
    this.mostrarMenu.emit(this.authenticated);

    if (this.authenticated) this.router.navigate(['']);
  }

  logoutUser() {
    this.authenticated = false;
    this.mostrarMenu.emit(this.authenticated);
    this.router.navigate(['login']);
  }

  userIsLoggedIn(): boolean {
    return this.authenticated;
  }
}
