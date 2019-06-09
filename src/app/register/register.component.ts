import {Component, OnInit} from '@angular/core';
import {RegisterInterface} from '../Interfaces/registerInterface';
import {AuthService} from '../services/auth.service';
import {API_Response} from '../Interfaces/API_Response';

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
    this.authService.registerUser(registerForm).subscribe((data: API_Response) => {
      console.log(data.msg);
    });
  }

}
