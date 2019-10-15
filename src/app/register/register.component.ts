import {Component, OnInit} from '@angular/core';

import {RegisterInterface, ApiResponse} from '../Interfaces';
import {AuthService} from '../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }


  registerUser(registerForm: RegisterInterface) {
    console.log(registerForm);
    this.authService.registerUser(registerForm).subscribe((data: ApiResponse) => {
      console.log(data.msg);
    });
  }

}
