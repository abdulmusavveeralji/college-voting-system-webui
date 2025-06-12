import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 baseUrl = 'http://localhost:8080'
   constructor(private http: HttpClient) { }
 
   getCandidates() {
     return this.http.get(`${this.baseUrl}/api/category`)
   }
 
   addCandidates(data: any) {
     return this.http.post(`${this.baseUrl}/api/category`, data)
   }
 
   updateCandidates(data: any) {
     return this.http.put(`${this.baseUrl}/api/category/${data.id}`, data)
   }
 
   deleteCandidates(id: number) {
     return this.http.delete(`${this.baseUrl}/api/category/${id}`)
   }
 }
 