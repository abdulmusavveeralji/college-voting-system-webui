import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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
      }
      ,
      {
        name: 'username',
        label: 'username',
        control: {
          type: 'text'
        }
      }
    ]


  showModel = false;
  data: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {


    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(data => {
      this.data = data
    })
  }

  openModel() {
    this.showModel = true;
  }

  closeModel() {
    this.showModel = false;
  }

  deleteCandidate(id: number) {
    
  }

  editCandidate(user: {}) {
  }


}
