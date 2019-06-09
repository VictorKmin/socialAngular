import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoginClicked: boolean;
  isRegisterClicked: boolean;
  isTokenPresent: any;

  loginClc() {
    this.isLoginClicked = !this.isLoginClicked;
    this.isRegisterClicked = false;
  }


  registerClc() {
    this.isRegisterClicked = !this.isRegisterClicked;
    this.isLoginClicked = false;
  }


  ngOnInit(): void {
    this.isTokenPresent = localStorage.getItem('token');
  }
}
