import {Component, OnInit} from '@angular/core';
import {LoginInterface} from '../Interfaces/loginInterface';
import {AuthService} from '../services/auth.service';
import {API_Response} from '../Interfaces/API_Response';

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
    this.authService.loginUser(loginForm).subscribe((data: API_Response) => {
      console.log(data.msg);
      if (data.success) {
        localStorage.setItem('token', data.msg);
      }
    });
  }

}
