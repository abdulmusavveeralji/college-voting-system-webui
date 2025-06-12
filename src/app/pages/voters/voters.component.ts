import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidateService } from '../candidate/candidate.service';
import { VotersService } from './voters.service';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss']
})
export class VotersComponent implements OnInit {

   column = [
      {
        name: 'idNumber',
        label: 'Id Number',
        control: {
          type: 'text'
        }
      },{
        name: 'password',
        label: 'Password',
        control: {
          type: 'text'
        }
      },
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
    constructor(private service: VotersService, private fb: FormBuilder
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
