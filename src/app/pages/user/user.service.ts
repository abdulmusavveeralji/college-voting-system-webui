import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

   
  getUsers() {
    return this.http.get(`${this.baseUrl}/api/allUsers`)
  }

  updateUser(data: any) {
    return this.http.put(`${this.baseUrl}/api/user/${data.id}`, data)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/api/user/${id}`)
  }
}
