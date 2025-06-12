import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.scss']
})
export class VoterLoginComponent implements OnInit {

  column = [
        {
          name: 'idNumber',
          label: 'Id Number',
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
        idNumber: [],
        password: []
      });
    }
  
    ngOnInit(): void { }
  
    login() {
      this.appService.voterLogin(this.userForm.value)
        .subscribe((response) => {
          console.log('response', response);
  
          if (response) {
            this.appService.setSessionStorage(this.userForm.value, true);
            this.router.navigate(['/voting']);
          }
          
        }, (error) => console.log('invalid user'));
    }
  
    logout() {
      this.appService.logout();
    }
  
  }
  