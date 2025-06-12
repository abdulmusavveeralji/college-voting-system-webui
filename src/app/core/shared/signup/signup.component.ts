import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  column = [
    {
      name: 'firstname',
      label: 'Firstname',
      control: {
        type: 'text'
      }
    },
    {
      name: 'lastname',
      label: 'Lastname',
      control: {
        type: 'text'
      }
    },

    {
      name: 'username',
      label: 'Username',
      control: {
        type: 'text'
      }
    }, {
      name: 'password',
      label: 'Password',
      control: {
        type: 'text'
      }
    }
  ];
  userForm: FormGroup;
  constructor(private appService: AppServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      username: [],
      password: [],
      firstname: [],
      lastname: []
    })
  }


  ngOnInit(): void {
  }

  signup() {
    this.appService.registerUser(this.userForm.value)
      .subscribe((response) => {
        console.log('response', response);
        this.router.navigate(['/login']);
      }, (error) => console.log('invalid user'));
  }

}
