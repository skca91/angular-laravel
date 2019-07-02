import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };

  public error = null;

  constructor(
    private user: UserService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleErrors(error)
    );
  }

  handleResponse(res) {
    console.log(res);
    this.form.email = null;
  }

  handleErrors(error) {
    this.error = error.error.error;
  }
}
