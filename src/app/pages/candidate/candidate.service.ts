import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';

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

  getAllCategories() {
    return this.http.get(`${this.baseUrl}/api/category`)
  }

  getDashboard() {
    return this.getCandidates();
  }

  voteCandidate(row: any) {
    return this.http.put(`${this.baseUrl}/api/candidate/vote`, row)
  }
}
