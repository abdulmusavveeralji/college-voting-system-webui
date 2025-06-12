import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input("column") column: any[] = [];
  @Input("data") data: any[] = [];
  @Input("title") title = '';
  @Input("apiMethods") apiMethods: any = {};
  @Input("hideAddButton") hideAddButton: boolean = false;

  editRow: any = null;
  showModal = false;

  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.generateForm()
  }

  editForm(row: any) {
    this.editRow = row;
    // const controls = Object.keys(this.userForm.controls)
    // controls.forEach(each => {
    //   this.userForm.get('each').setValue(row[each])
    // })
    const obj = this.column.find((f: any) => f.expectedObject && f.control && f.control.type == 'select')
    if (obj) {
      const selected = obj.control.selections().find((f: any) => f.id == row[obj.name]?.id)
      row[obj.name] = selected;
    }
    this.userForm.patchValue({...row});
    this.openModal();
  }
  deleteRow(id: number) {
    this.editRow = {id: id};
  }

  deleteRecord() {
    this.apiMethods.delete(this.editRow.id, () => this.closeModal());
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.editRow = null;
  }

  generateForm() {
    this.userForm = this.fb.group(this.column.reduce((acc, cur) => {
      acc = acc || {};
      acc[cur.name] = [null];
      return acc;
    }, {}));
    this.userForm.addControl('id', new FormControl(null));
  }
  editCandidate(row: any) {
    this.userForm.setValue(row);
  }

  saveData() {

    if (this.editRow) {
      this.apiMethods.put(this.userForm);
      return;
    }

    this.apiMethods.post(this.userForm);
    console.log('this.userForm.value', this.userForm.value);
  }

  getRow(d: any, row: any) {
    if (row.expectedObject) {
      return d[row.name][row.optionKey];
    }

    return d[row.name];
  }
}
