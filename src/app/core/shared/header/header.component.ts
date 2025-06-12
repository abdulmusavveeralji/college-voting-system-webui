import { Component, Input, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = true;
  constructor(public service: AppServiceService) { }

  ngOnInit(): void {
  }

  logout() {
    this.service.logout();
  }
  

}
