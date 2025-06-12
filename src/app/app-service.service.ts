import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  refreshSession$ = new Subject();

  baseUrl = 'http://localhost:8080'
  constructor(private http: HttpClient, private router: Router) { }


  setSessionStorage(userData: any, isVoter = false) {
    sessionStorage.clear();
    if (isVoter) {
      sessionStorage.setItem("username", userData.idNumber);
      sessionStorage.setItem("isVoter", userData ? 'true' : 'false');
    } else {
      sessionStorage.setItem("username", userData.username);
      sessionStorage.setItem("isLoggedIn", userData ? 'true' : 'false');
    }

    this.refreshSession$.next(true);
  }

  getLoggedUserName() {
    return sessionStorage.getItem("username");
  }

  get isLoggedIn() {
    return sessionStorage.getItem("isLoggedIn") === 'true' ? true : false;
  }

  get resetSession() {
    return sessionStorage.clear();
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/api/validateUser`, data, { withCredentials: true })
  }
  voterLogin(data: any) {
    return this.http.post(`${this.baseUrl}/api/voters/validateUser`, data, { withCredentials: true })
  }

  registerUser(data: any) {
    return this.http.post(`${this.baseUrl}/api/signup`, data, { withCredentials: true })
  }

  logout() {
    sessionStorage.clear();
    this.refreshSession$.next(true);
    this.router.navigate(['/login'])
  }
}
