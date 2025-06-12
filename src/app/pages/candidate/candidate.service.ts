import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  baseUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getCandidates() {
    return this.http.get(`${this.baseUrl}/api/candidates`)
  }

  addCandidates(data: any) {
    return this.http.post(`${this.baseUrl}/api/candidates`, data)
  }

  updateCandidates(data: any) {
    return this.http.put(`${this.baseUrl}/api/candidates/${data.id}`, data)
  }

  deleteCandidates(id: number) {
    return this.http.delete(`${this.baseUrl}/api/candidates/${id}`)
  }
}
