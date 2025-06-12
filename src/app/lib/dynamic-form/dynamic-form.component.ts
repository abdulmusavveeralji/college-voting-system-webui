import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  @Input('columns') columns: any[] = [];
  @Input('data') data: any = {};
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({});
   }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.generateForm();

    if (this.data) {
      this.editCandidate(this.data);
    }

  }

  generateForm() {
    this.userForm = this.fb.group(this.columns.reduce((acc, cur) => {
      acc = acc || {};
      acc[cur.name] = [''];
      return acc;
    }, {}));
    this.userForm.addControl('id', new FormControl(null));
  }
  editCandidate(row: any) {
    this.userForm.setValue(row);
  }

  addCandidate() {
    console.log('this.userForm.value', this.userForm.value);
  }
}
