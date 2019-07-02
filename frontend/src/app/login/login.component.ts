import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
  	email: null,
  	password: null
  };

  public error = null;

  constructor(
    private userS: UserService,
    private token: TokenService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.userS.login(this.form).subscribe(
  		data => this.handleResponse(data),
  		error => this.handleErrors(error),
  		);
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
  handleErrors(error){
  	this.error = error.error.error;
  }

}

