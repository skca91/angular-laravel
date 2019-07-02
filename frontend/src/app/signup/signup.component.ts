import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public form ={ 
  	email:null,
  	name: null,
  	password: null,
  	password_confirmation: null
  };

  public error = [];

  constructor(
    private userS: UserService,
    private token: TokenService,
    private router: Router) { }

   ngOnInit() {
  }

  onSubmit(){
  	this.userS.signUp(this.form).subscribe(
  		data => this.handleResponse(data),
  		error => this.handleErrors(error),
  		);
  }
  
  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleErrors(error){
  	this.error = error.error.errors;
  }

 

}
