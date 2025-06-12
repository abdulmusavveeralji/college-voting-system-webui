import { Component, OnInit } from '@angular/core';
import { CandidateService } from './candidate.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  

  column = [

    {
      name: 'firstname',
      label: 'FirstName',
      control: {
        type: 'text'
      }
    },
    {
      name: 'lastname',
      label: 'Lastname',
      control: {
        type: 'text'
      }
    },
    {
      name: 'gender',
      label: 'Gender',
      control: {
        type: 'text'
      }
    },
    {
      name: 'position',
      label: 'Position',
      control: {
        type: 'text'
      }
    },
    {
      name: 'year',
      label: 'Year',
      control: {
        type: 'text'
      }
    },
    
    {
      name: 'category',
      label: 'Category',
      expectedObject: true,
      optionKey: 'name',
      control: {
        type: 'select',
        selections: () => this.categoryList(),
        placeholder: 'Select Category'
      }
    },
  ]
  data: any;
  showModel = false;

  category: any = [];

  apiMethods = {
    get: () => this.getAllUsers(),
    post: (data: FormGroup) => this.addCandidate(data),
    put: (data: FormGroup) => this.updateCandidate(data),
    delete: (id: number, cb: ()=>{}) => this.deleteCandidate(id, cb)
  }
  constructor(private service: CandidateService, private fb: FormBuilder
  ) {
    
  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    forkJoin({candidate: this.service.getCandidates(), category: this.service.getAllCategories()})
    .subscribe(({candidate, category}) => {
      this.data = candidate;
      this.category = category;
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

  categoryList() {
    return this.category;
  }
}
