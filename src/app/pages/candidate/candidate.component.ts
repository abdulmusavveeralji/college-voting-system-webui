import { Component, OnInit } from '@angular/core';
import { CandidateService } from './candidate.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
        name: 'status',
        label: 'Status',
        control: {
          type: 'text'
        }
      },
    ]
  data: any;
  userForm: FormGroup;
  showModel = false;
  constructor(private service: CandidateService, private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      id: [],
      gender: [],
      position: [],
      year: [],
      firstname: [],
      lastname: []
    })
  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getCandidates().subscribe(data => {
      this.data = data
    })
  }
  addCandidate() {
    this.service.addCandidates(this.userForm.value)
      .subscribe((response) => {
        console.log('response', response);
        this.getAllUsers();
      }, (error) => console.log('invalid user'));
  }
  deleteCandidate(id: number) {
    this.service.deleteCandidates(id)
      .subscribe((response) => {
        console.log('response', response);
        this.getAllUsers();
      }, (error) => console.log('invalid user'));
  }

  editCandidate(user: {}) {
    this.userForm.patchValue({...user});
  }

  openModel() {
    this.showModel = true;
  }
  
  closeModel() {
    this.showModel = false;
  }
}
