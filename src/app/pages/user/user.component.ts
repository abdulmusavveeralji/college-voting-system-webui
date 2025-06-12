import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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

 

}
