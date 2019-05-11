import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-dinamico',
  templateUrl: './form-dinamico.component.html',
  styleUrls: ['./form-dinamico.component.sass']
})
export class FormDinamicoComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }
  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })
    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }


}
