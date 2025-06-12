import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidateService } from '../candidate/candidate.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

   column = [
      {
        name: 'name',
        label: 'Category Name',
        control: {
          type: 'text'
        }
      }
    ]
    data: any;
    showModel = false;
  
    apiMethods = {
      get: () => this.getAllUsers(),
      post: (data: FormGroup) => this.addCandidate(data),
      put: (data: FormGroup) => this.updateCandidate(data),
      delete: (id: number, cb: ()=>{}) => this.deleteCandidate(id, cb)
    }
    constructor(private service: CategoryService, private fb: FormBuilder
    ) {
      
    }
    ngOnInit(): void {
      this.getAllUsers();
    }
  
    getAllUsers() {
      this.service.getCandidates().subscribe(data => {
        this.data = data
      })
    }
    addCandidate(data: FormGroup) {
      this.service.addCandidates(data.value)
        .subscribe((response) => {
          console.log('response', response);
          this.getAllUsers();
        }, (error) => console.log('invalid user'));
    }
  
  
    updateCandidate(data: FormGroup) {
      this.service.updateCandidates(data.value)
        .subscribe((response) => {
          console.log('response', response);
          this.getAllUsers();
        }, (error) => console.log('invalid user'));
    }
    deleteCandidate(id: number, cb: ()=> {}) {
      this.service.deleteCandidates(id)
        .subscribe((response) => {
          console.log('response', response);
          this.getAllUsers();
          cb && cb();
        }, (error) => console.log('invalid user'));
    }
}
