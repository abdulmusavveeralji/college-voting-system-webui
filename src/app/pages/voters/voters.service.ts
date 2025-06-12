import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotersService {

  baseUrl = 'http://localhost:8080'
    constructor(private http: HttpClient) { }
  
    getCandidates() {
      return this.http.get(`${this.baseUrl}/api/voters`)
    }
  
    addCandidates(data: any) {
      return this.http.post(`${this.baseUrl}/api/voters`, data)
    }
  
    updateCandidates(data: any) {
      return this.http.put(`${this.baseUrl}/api/voters/${data.id}`, data)
    }
  
    deleteCandidates(id: number) {
      return this.http.delete(`${this.baseUrl}/api/voters/${id}`)
    }
}
