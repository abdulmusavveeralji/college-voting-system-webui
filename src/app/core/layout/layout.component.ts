import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isLoggedIn = true;
  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.checkSession();

    this.service.refreshSession$
    .subscribe(() => this.checkSession())
  }

  checkSession() {
    this.isLoggedIn = this.service.isLoggedIn;
  }
}
