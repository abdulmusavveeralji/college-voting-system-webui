import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    column = [
      {
        name: 'username',
        label: 'Username',
        control: {
          type: 'text'
        }
      },{
        name: 'password',
        label: 'Password',
        control: {
          type: 'text'
        }
      }
    ];
  userForm: FormGroup;
  constructor(
    private appService: AppServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      username: [],
      password: []
    });
  }

  ngOnInit(): void { }

  login() {
    this.appService.login(this.userForm.value)
      .subscribe((response) => {
        console.log('response', response);

        if (response) {
          this.appService.setSessionStorage(this.userForm.value);
          this.router.navigate(['/dashboard']);
        }
        
      }, (error) => console.log('invalid user'));
  }

  logout() {
    this.appService.logout();
  }

}
