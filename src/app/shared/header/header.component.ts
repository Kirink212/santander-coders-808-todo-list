import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';
@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck, OnChanges {
  renderizar: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.mostrarMenu.subscribe(mostrar => this.renderizar = mostrar);
  }

  ngDoCheck() {

  }

  ngOnChanges() {

  }

  logoutUser() {
    this.loginService.logoutUser();
  }

}
