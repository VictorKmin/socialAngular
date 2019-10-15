import {Component, OnInit} from '@angular/core';

import {LoginInterface, ApiResponse} from '../Interfaces';
import {AuthService} from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }


  loginUser(loginForm: LoginInterface) {
    console.log(loginForm);
    this.authService.loginUser(loginForm).subscribe((data: ApiResponse) => {
      console.log(data.msg);
      if (data.success) {
        localStorage.setItem('token', data.msg);
      }
    });
  }
}
