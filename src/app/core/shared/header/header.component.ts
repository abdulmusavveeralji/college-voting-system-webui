import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = true;
  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.checkSession();

    this.service.refreshSession$
    .subscribe(() => this.checkSession())
  }

  checkSession() {
    this.isLoggedIn = this.service.isLoggedIn;
    console.log('this.service.getSessionStorage', this.service.getSessionStorage)
  }

  logout() {
    this.service.logout();
  }

}
